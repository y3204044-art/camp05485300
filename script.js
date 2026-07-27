// רשום כאן את שמות הקבצים המדויקים שתעלה לתיקיית media
const mediaFiles = [
  "photo1.jpg",
  "video1.mp4",
  "photo2.png"
];

const gallery = document.getElementById('gallery');

mediaFiles.forEach(file => {
  const isVideo = file.endsWith('.mp4') || file.endsWith('.mov') || file.endsWith('.webm');
  const path = `media/${file}`;

  if (isVideo) {
    const video = document.createElement('video');
    video.src = path;
    video.className = 'media-item';
    video.controls = true;
    gallery.appendChild(video);
  } else {
    const img = document.createElement('img');
    img.src = path;
    img.className = 'media-item';
    img.loading = 'lazy';
    gallery.appendChild(img);
  }
});
