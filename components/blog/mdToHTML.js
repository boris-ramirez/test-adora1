document.addEventListener("DOMContentLoaded", () => {
  window.convertMarkdown = function (markdown) {
    return convertToHTML(markdown);
  };

  function convertToHTML(markdown) {
    const tokens = markdown.split(/\n/);
    let html = "";
    let inCodeBlock = false;
    let listOpen = false;
    let listType = "";
    let inFrontMatter = false;

    tokens.forEach((line) => {
      line = line.trim();

      // Manejo de bloques de código
      if (line.startsWith("```")) {
        if (inCodeBlock) {
          html += "</code></pre>\n";
        } else {
          html += "<pre><code>";
        }
        inCodeBlock = !inCodeBlock;
        return;
      }

      if (inCodeBlock) {
        html += line + "\n";
        return;
      }

      // Manejo de front matter (metadatos)
      if (line.startsWith("---")) {
        inFrontMatter = !inFrontMatter;
        return;
      }

      if (inFrontMatter) {
        return;
      }

      // Encabezados
      const headerMatch = line.match(/^(#{1,6}) (.*)/);
      if (headerMatch) {
        const level = headerMatch[1].length;
        html += `<h${level}>${headerMatch[2]}</h${level}>\n`;
        return;
      }

      // Manejo de iframes
      const iframeMatch = line.match(/<iframe.*<\/iframe>/);
      if (iframeMatch) {
        html += `${line}\n`;
        return;
      }

      // Imágenes con alineación
      const imageMatch = line.match(
        /!\[(.*?)\]\((.*?)\)\s*(align="left"|align="right"|align="center")?/,
      );
      if (imageMatch) {
        const [, alt, srcInfo] = imageMatch;
        const [src, alignment] = srcInfo.split(" ");
        const style = alignment
          ? ` style="float:${alignment.split("=")[1].replace(/"/g, "")};"`
          : "";
        html += `<img src="${src}" alt="${alt}"${style}>\n`;
        return;
      }

      // Enlaces
      const linkMatch = line.match(/\[(.*?)\]\((.*?)\)/);
      if (linkMatch) {
        html += `<a href="${linkMatch[2]}">${linkMatch[1]}</a>\n`;
        return;
      }

      // Listas
      const listMatch = line.match(/^(\*|-|\d+\.) (.*)/);
      if (listMatch) {
        const currentListType = listMatch[1].includes(".") ? "ol" : "ul";
        if (!listOpen || listType !== currentListType) {
          if (listOpen) {
            html += `</${listType}>\n`;
          }
          listType = currentListType;
          html += `<${listType}>\n`;
          listOpen = true;
        }
        html += `<li>${listMatch[2]}</li>\n`;
        return;
      }

      if (listOpen) {
        html += `</${listType}>\n`;
        listOpen = false;
        return;
      }

      // Bloques de cita
      if (line.startsWith(">")) {
        html += `<blockquote>${line.substring(1)}</blockquote>\n`;
        return;
      }

      // Parágrafos y negritas/cursivas
      line = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      line = line.replace(/__(.*?)__/g, "<em>$1</em>");
      if (line) {
        html += `<p>${line}</p>\n`;
      }
    });

    if (listOpen) {
      html += `</${listType}>\n`;
    }

    return html;
  }
});
