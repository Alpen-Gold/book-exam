let cardsBook = document.querySelector("#cardsBook");
let table = document.querySelector("#table");
let indexCategory = 1;
let typeStatuIndex;
// spinner
let loadingHTML = `

        <div class="d-flex align-items-center justify-content-center">
        <div class="loader m-4">
        </div>
        </div> 

`;

// error
let errorHTML = `
    <p class=" fs-2 text-center" >
    <i class="text-danger fa-solid fa-triangle-exclamation"></i>
    error in fetch
    </p>
`;

const myModal = new bootstrap.Modal(document.querySelector("#exampleModal"), {
  keyboard: false,
});

// start project

// all function start

let local = () => {
  localStorage.setItem("arrayBook", JSON.stringify(dataArray));
};

let data = JSON.parse(localStorage.getItem("arrayBook")) || dataArray;

let allProduct = () => {
  cardsBook.innerHTML = loadingHTML;
  try {
    cardsBook.innerHTML = "";
    data.map((item, index) => {
      console.log(item);

      cardsBook.innerHTML += `
      
      <div class="wrapper p-3 col-12 col-sm-6 col-xl-4">
      <div class="card p-3">
        <img
          src="${item.img}"
          alt=""
          class="book-foto-product"
        />

        ${
          item.published
            ? `
        <ul class="p-0 ul-list d-flex align-items-center">
        <li class="d-flex align-items-center my-3">
         
          <p class="m-0 pt-2 p-0 p-2" id="typeBook">Published</p>
        </li>
      </ul>
        `
            : `
        <ul class="p-0 ul-list d-flex align-items-center">
        <li class="d-flex align-items-center bg-danger my-3">
         
          <p id="typeBookgreen" class=" p-2 m-0 pt-2 p-0">Draft</p>
        </li>
      </ul>
        `
        }
       


        <p>
         ${item.bookLorem}
        </p>

        <div class="border-bottom border-1 my-2 border-secondary"></div>

        <ul
          class="d-flex align-items-center justify-content-between ul-list"
        >
          <li class="p-0">
            <p class="p-0">Price</p>
            <p class="p-0">$${item.price}</p>
          </li>

          <li class="p-0">
            <p class="p-0">Sales</p>
            <p class="p-0">${item.sales}</p>
          </li>

          <li class="p-0">
            <p class="p-0">Revenue</p>
            <p class="p-0">$${Number(item.price) * item.sales}</p>
          </li>
        </ul>
      </div>
    </div>


      `;
    });
    local();
  } catch (error) {
    console.error("error : " + error);
  }
};

let allLineProduct = () => {
  cardsBook.innerHTML = loadingHTML;
  try {
    cardsBook.innerHTML = table.innerHTML;

    let tableCard = document.querySelector("#tableCard");

    data.map((item, index) => {
      console.log(item);

      tableCard.innerHTML += `
      <tr class="">
      <th scope="row">
        <input
          class="form-check-input mt-0"
          type="checkbox"
          aria-label="Checkbox for following text input"
        />
      </th>
      <td class="d-flex align-items-center">
        <img src="${item.img}" alt="" class="book-foto-product-table"/>
        <p>
         ${item.bookLorem}
        </p>
      </td>

      <td>${item.published ? "Published" : "Draft"}</td>
      <td>$${item.price}</td>
      <td>${item.sales}</td>
      <td>$${Number(item.price * item.sales)}</td>
    </tr>
      `;
    });
    local();
  } catch (error) {
    console.error("error : " + error);
  }
};
// All function start

// Published function start
let publishedProduct = () => {
  cardsBook.innerHTML = loadingHTML;
  try {
    let arrayTrue = data.filter((item) => {
      return item.published === true;
    });

    console.log(arrayTrue);

    cardsBook.innerHTML = "";
    arrayTrue.map((item, index) => {
      console.log(item);

      cardsBook.innerHTML += `

      <div class="wrapper p-3 col-12 col-sm-6 col-xl-4">
      <div class="card p-3">
        <img
          src="${item.img}"
          alt=""
          class="book-foto-product"
        />

      
        <ul class="p-0 ul-list d-flex align-items-center">
        <li class="d-flex align-items-center my-3">
         
          <p class="m-0 pt-2 p-0 p-2" id="typeBook">Published</p>
        </li>
      </ul>
        
     
       

        <p>
         ${item.bookLorem}
        </p>

        <div class="border-bottom border-1 my-2 border-secondary"></div>

        <ul
          class="d-flex align-items-center justify-content-between ul-list"
        >
          <li class="p-0">
            <p class="p-0">Price</p>
            <p class="p-0">$${item.price}</p>
          </li>

          <li class="p-0">
            <p class="p-0">Sales</p>
            <p class="p-0">${item.sales}</p>
          </li>

          <li class="p-0">
            <p class="p-0">Revenue</p>
            <p class="p-0">$${Number(item.price) * item.sales}</p>
          </li>
        </ul>
      </div>
    </div>

      `;
    });

    local();
  } catch (error) {
    console.error("error : " + error);
  }
};

let publishedLineProduct = () => {
  cardsBook.innerHTML = loadingHTML;
  try {
    let arrayTrue = data.filter((item) => {
      return item.published === true;
    });
    cardsBook.innerHTML = table.innerHTML;

    let tableCard = document.querySelector("#tableCard");

    arrayTrue.map((item, index) => {
      console.log(item);

      tableCard.innerHTML += `
      <tr class="">
      <th scope="row">
        <input
          class="form-check-input mt-0"
          type="checkbox"
          aria-label="Checkbox for following text input"
        />
      </th>
      <td class="d-flex align-items-center">
        <img src="${item.img}" alt="" class="book-foto-product-table"/>
        <p>
         ${item.bookLorem}
        </p>
      </td>

      <td>${"Published"}</td>
      <td>$${item.price}</td>
      <td>${item.sales}</td>
      <td>$${Number(item.price * item.sales)}</td>
    </tr>
      `;
    });
    local();
  } catch (error) {
    console.error("error : " + error);
  }
};
// Published function end

// Draf function start
let darftProduct = () => {
  cardsBook.innerHTML = loadingHTML;
  try {
    let arrayTrue = data.filter((item) => {
      return item.published !== true;
    });

    console.log(arrayTrue);

    cardsBook.innerHTML = "";
    arrayTrue.map((item, index) => {
      console.log(item);

      cardsBook.innerHTML += `

      <div class="wrapper p-3 col-12 col-sm-6 col-xl-4">
      <div class="card p-3">
        <img
          src="${item.img}"
          alt=""
          class="book-foto-product"
        />

   
        <ul class="p-0 ul-list ">
        <li class="d-flex align-items-center bg-danger my-3">
         
          <p id="typeBookgreen" class=" p-2 m-0 pt-2 p-0">Draft</p>
        </li
      </ul>
      

        <p>
         ${item.bookLorem}
        </p>

        <div class="border-bottom border-1 my-2 border-secondary"></div>

        <ul
          class="d-flex align-items-center justify-content-between ul-list"
        >
          <li class="p-0">
            <p class="p-0">Price</p>
            <p class="p-0">$${item.price}</p>
          </li>

          <li class="p-0">
            <p class="p-0">Sales</p>
            <p class="p-0">${item.sales}</p>
          </li>

          <li class="p-0">
            <p class="p-0">Revenue</p>
            <p class="p-0">$${Number(item.price) * item.sales}</p>
          </li>
        </ul>
      </div>
    </div>

      `;
    });
    local();
  } catch (error) {
    console.error("error : " + error);
  }
};

let draftLineProduct = () => {
  cardsBook.innerHTML = loadingHTML;
  try {
    let arrayTrue = data.filter((item) => {
      return item.published !== true;
    });
    cardsBook.innerHTML = table.innerHTML;

    let tableCard = document.querySelector("#tableCard");

    arrayTrue.map((item, index) => {
      console.log(item);

      tableCard.innerHTML += `
      <tr class="">
      <th scope="row">
        <input
          class="form-check-input mt-0"
          type="checkbox"
          aria-label="Checkbox for following text input"
        />
      </th>
      <td class="d-flex align-items-center">
        <img src="${item.img}" alt="" class="book-foto-product-table"/>
        <p>
         ${item.bookLorem}
        </p>
      </td>

      <td>${"Published"}</td>
      <td>$${item.price}</td>
      <td>${item.sales}</td>
      <td>$${Number(item.price * item.sales)}</td>
    </tr>
      `;
    });
    local();
  } catch (error) {
    console.error("error : " + error);
  }
};
// Draf function end

let postModal = () => {
  myModal.show();
};

let addDataNewBook = () => {
  let urlImg = document.querySelector("#urlImg");
  let bookTitle = document.querySelector("#bookTitle");
  let price = document.querySelector("#price");
  let sales = document.querySelector("#sales");

  let status = document.querySelector("#status");

  data.push({
    id: data.length + 1,
    bookLorem: `${bookTitle.value}`,
    img: String(urlImg.value),
    published: status.value === "Published" ? true : false,
    price: String(price.value),
    sales: sales.value,
  });

  document.querySelector("#urlImg").value = "";
  document.querySelector("#bookTitle").value = "";
  document.querySelector("#price").value = "";
  document.querySelector("#sales").value = "";

  allProduct();
};

let search = () => {
  cardsBook.innerHTML = loadingHTML;
  try {
    let search = document.querySelector("#search").value;

    cardsBook.innerHTML = "";
    data.map((item, index) => {
      let arrayTrue = item.bookLorem.includes(search);
      if (arrayTrue) {
        console.log(arrayTrue);
        cardsBook.innerHTML += `
      
      <div class="wrapper p-3 col-12 col-sm-6 col-xl-4">
      <div class="card p-3">
        <img
          src="${item.img}"
          alt=""
          class="book-foto-product"
        />

        ${
          item.published
            ? `
        <ul class="p-0 ul-list d-flex align-items-center">
        <li class="d-flex align-items-center my-3">
         
          <p class="m-0 pt-2 p-0 p-2" id="typeBook">Published</p>
        </li>
      </ul>
        `
            : `
        <ul class="p-0 ul-list d-flex align-items-center">
        <li class="d-flex align-items-center bg-danger my-3">
         
          <p id="typeBookgreen" class=" p-2 m-0 pt-2 p-0">Draft</p>
        </li>
      </ul>
        `
        }
       


        <p>
         ${item.bookLorem}
        </p>

        <div class="border-bottom border-1 my-2 border-secondary"></div>

        <ul
          class="d-flex align-items-center justify-content-between ul-list"
        >
          <li class="p-0">
            <p class="p-0">Price</p>
            <p class="p-0">$${item.price}</p>
          </li>

          <li class="p-0">
            <p class="p-0">Sales</p>
            <p class="p-0">${item.sales}</p>
          </li>

          <li class="p-0">
            <p class="p-0">Revenue</p>
            <p class="p-0">$${Number(item.price) * item.sales}</p>
          </li>
        </ul>
      </div>
    </div>


      `;
      }
    });
    local();
  } catch (error) {
    console.error("error : " + error);
  }
};

let alls = () => {
  indexCategory = 1;
  allProduct();
};

let published = () => {
  indexCategory = 2;
  publishedProduct();
};

let draft = () => {
  indexCategory = 3;
  darftProduct();
};

let lineCard = () => {
  if (indexCategory === 1) {
    allLineProduct();
  } else if (indexCategory === 2) {
    publishedLineProduct();
  } else if (indexCategory === 3) {
    draftLineProduct();
  }
};

let tableCard = () => {
  if (indexCategory === 1) {
    allProduct();
  } else if (indexCategory === 2) {
    publishedProduct();
  } else if (indexCategory === 3) {
    darftProduct();
  }
};

allProduct();
