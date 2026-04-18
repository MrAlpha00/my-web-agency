$files = Get-ChildItem -Filter "build_log*.txt"
foreach ($f in $files) {
    $content = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::Unicode)
    # Remove ANSI escape codes
    $clean = $content -replace '\x1b\[[0-9;]*m', ''
    $clean = $clean -replace '\[\d+\|', '|'
    # Remove strange Unicode symbols and replace with spaces
    $clean = $clean -replace '[^\x20-\x7E\x0A\x0D]', ' '
    # Normalize multiple spaces
    $clean = $clean -replace '\s+', ' '
    # Clean up pipe marks with proper spacing
    $clean = $clean -replace '\s\|\s*', ' | '
    [System.IO.File]::WriteAllText($f.FullName, $clean, [System.Text.Encoding]::UTF8)
    Write-Host "Cleaned: $($f.Name)"
}