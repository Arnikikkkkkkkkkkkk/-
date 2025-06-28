function initTimer(items) {
  const now = new Date();

  items.forEach(({id, unlockDate, videoSrc}) => {
    const block = document.getElementById(id);
    const unlock = new Date(unlockDate);

    if (now >= unlock) {
      block.innerHTML = `
        <video width="320" height="180" controls>
          <source src="\${videoSrc}" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      `;
    }
  });
}