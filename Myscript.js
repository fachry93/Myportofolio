<script>
document.addEventListener("DOMContentLoaded", () => {
  const fills = document.querySelectorAll('.progress-fill');

  fills.forEach(fill => {
    const percent = fill.getAttribute('data-percent');
    fill.style.width = percent + '%';
    fill.textContent = percent + '%';
  });
});
</script>
