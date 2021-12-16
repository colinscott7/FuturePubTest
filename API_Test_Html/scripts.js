// api url
const api_url =
  "data.json";

// Defining async function
async function getApiData(url) {

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  if (response) {
    hideLoader();
  }
  htmlOutput(data.widget.data);
}
// Calling that async function
getApiData(api_url);

// Function to hide the loader
function hideLoader() {
  document.getElementById('loading').style.display = 'none';
  document.getElementById('content').style.display = 'flex';
}
// Function to define innerHTML for HTML table
function htmlOutput(data) {
  let tableContent =
    `<tr>
        <th class="th-logo">Merchant logo</th>
        <th class="th-merchant">Merchant name</th>
        <th class="th-product">Product name</th>
        <th class="th-price">Price</th>
        <th class="th-currency">Currency</th>
        <th>Product affiliate URL</th>
      </tr>`;

  // Loop to access all rows 
  for (let r of data.offers) {
    tableContent += `<tr> 
    <td><img src=` + r.merchant.logo_url + ` /></td>
    <td>${r.merchant.name}</td>
    <td>${r.model}</td> 
    <td>${r.offer.price}</td>          
    <td>${r.offer.currency_iso} (${r.offer.currency_symbol})</td>  
    <td><a href="${r.offer.link}">${r.offer.merchant_link_text}</a></td>  
    </tr>`;
  }
  // Setting innerHTML as tab variable
  document.getElementById("products").innerHTML = tableContent;
}