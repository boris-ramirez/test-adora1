document.addEventListener("DOMContentLoaded", () => {
  fileUpload("./posts-blogs/cl5k1prrz01989rnvahrtdhoy.md");

  function fileUpload(file) {
    fetch(file)
      .then((response) => {
        if (!response.ok)
          throw new Error("Network response was not ok " + response.statusText);
        return response.text();
      })
      .then((text) => {
        document.getElementById("blog-content").innerHTML =
          window.convertMarkdown(text);
        text;
        loadThumbnails();
      })
      .catch((error) => console.error("Error loading mdToHTML file:", error));
  }

  function loadThumbnails() {
    fetch("./components/blog/blog.json")
      .then((response) => response.json())
      .then((blogs) => {
        const thumbnailsContainer =
          document.getElementById("thumbnails-container") ||
          document.createElement("div");
        thumbnailsContainer.id = "thumbnails-container";
        document
          .getElementById("blog-content")
          .appendChild(thumbnailsContainer);

        thumbnailsContainer.innerHTML = ""; // Clear existing thumbnails on reloads

        blogs.forEach((blog) => {
          const thumbnail = document.createElement("div");
          thumbnail.classList.add("thumbnail");
          setThumbnailWidth(thumbnail);

          const thumbnailLink = document.createElement("a");
          thumbnailLink.href = "#";
          thumbnailLink.addEventListener("click", () =>
            fileUpload(`./posts-blogs/${blog.file}`)
          );

          const thumbnailImage = document.createElement("img");
          thumbnailImage.src = blog.image;
          thumbnailImage.alt = blog.title;

          const thumbnailTitle = document.createElement("p");
          thumbnailTitle.textContent = blog.title;

          thumbnailLink.appendChild(thumbnailImage);
          thumbnailLink.appendChild(thumbnailTitle);
          thumbnail.appendChild(thumbnailLink);
          thumbnailsContainer.appendChild(thumbnail);
        });

        // Set widths for the first time
        setThumbnailWidth();
      })
      .catch((error) => console.error("Error loading blog thumbnails:", error));
  }

  function setThumbnailWidth() {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const width = window.innerWidth;
    let columns;

    if (width < 768) {
      columns = 1;
    } else if (width < 1024) {
      columns = 2;
    } else if (width < 1536) {
      columns = 3;
    } else {
      columns = 3;
    }

    const columnWidth = 100 / (columns + 1) + "%";

    thumbnails.forEach((thumbnail) => {
      thumbnail.style.width = columnWidth;
    });
  }

  window.addEventListener("resize", setThumbnailWidth);
});
