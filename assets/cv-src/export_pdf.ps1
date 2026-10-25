# Regenera los HTML del CV y los exporta a PDF con Edge headless.
# Uso: powershell -File export_pdf.ps1   (desde esta carpeta)
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $here
python build_cv.py
$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
foreach ($l in "es", "en") {
  $out = Join-Path (Split-Path $here -Parent) "cv-$l.pdf"
  & $edge --headless=new --disable-gpu --no-pdf-header-footer "--print-to-pdf=$out" "file:///$($here -replace '\\','/')/cv-$l.html"
}
