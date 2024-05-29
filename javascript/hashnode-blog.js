const GET_USER_ARTICLES = `
    query  {
        user(username: "devonajourney") {
            publication {
                posts {
                    title
                    brief
                    slug
                    coverImage
                }
            }
        }
    }
`;

gql(GET_USER_ARTICLES, { page: 0 }).then((result) => {
  const articles = result.data.user.publication.posts;
  let container = document.createElement("div");

  articles.forEach((article) => {
    let card = document.createElement("div");
    let title = document.createElement("h2");
    title.innerText = article.title;

    let brief = document.createElement("p");
    // brief.innerText = article.brief;
    let img = document.createElement("img");
    img.src = article.coverImage;
    img.height = 500;
    img.width = 800;
    img.justify = "left";

    let link = document.createElement("a");
    link.href = `https://ismaelvelasco.dev/${article.slug}`;
    link.appendChild(title);
    link.appendChild(img);
    // container.appendChild(title);
    // title.appendChild(link);
    // container.appendChild(img);
    container.appendChild(link);
  });

  document.querySelector(".blog").appendChild(container);
});

async function gql(query, variables = {}) {
  const data = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  return data.json();
}

document.getElementById("articles").parentNode.innerHTML = `
<div class="blog">
</div>`;
