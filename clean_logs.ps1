$files = Get-ChildItem -Filter "build_log*.txt"
foreach ($f in $files) {
    $content = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::Unicode)
    $clean = $content -replace '\x1b\[[0-9;]*m', ''
    $clean = $clean -replace '\[\d+\|', '|'
    $clean = $clean -replace '\s+', ' '
    [System.IO.File]::WriteAllText($f.FullName, $clean, [System.Text.Encoding]::UTF8)
    Write-Host "Cleaned: $($f.Name)"
}