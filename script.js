let counter = 1;
const tbody = document.getElementById('sales_tbody');
function add_row(search_value) {
  if (event.key == 'Enter') {
    var tbody_length = tbody.rows.length;

    if (tbody_length > 0) {
      const check = Array();
      for (let i = 0; i < tbody_length; i++) {
        const ID = tbody.rows[i].id;
        const id_to_arr = ID.split('_');

        const td_input_value = document.getElementById(`product_id_${id_to_arr[2]}`).value;

        if (search_value == td_input_value) {
          const Quantity_td_value = document.getElementById(`Quantity_id_${id_to_arr[2]}`).value;
          const New_Quantity_Value = parseFloat(Quantity_td_value) + 1;
          document.getElementById(`Quantity_id_${id_to_arr[2]}`).value = New_Quantity_Value;

          calculation();

          check.push('true');
        } else {
          check.push('false');
        }
      }

      if (check.includes('true') == false) {
        var new_row_content = '';
        new_row_content += `<td id="counter_id_${counter}">${counter}</td>`;
        new_row_content += `<td id="product_td_${counter}"><input type="text" value="${search_value}" id="product_id_${counter}" /></td>`;
        new_row_content += `<td><input type="text" onkeyup="calculation()" value="1" id="Quantity_id_${counter}" /></td>`;
        new_row_content += `<td><input type="text" onkeyup="calculation()" value="" id="Price_1_id_${counter}" /></td>`;
        new_row_content += `<td><input type="text" value="" readonly id="Row_Total_id_${counter}" /></td>`;

        new_row_content += `<td><button id="delete_row_id_${counter}" onclick="Delete_Row(this.id)">X</button></td>`;

        var tbody_length = tbody.rows.length;
        var added_new_row = tbody.insertRow(tbody_length);
        added_new_row.id = `row_id_${counter}`;

        added_new_row.innerHTML = new_row_content;
      } else {

      }
    } else {
      var new_row_content = '';
      new_row_content += `<td id="counter_id_${counter}">${counter}</td>`;
      new_row_content += `<td id="product_td_${counter}"><input type="text" value="${search_value}" id="product_id_${counter}" /></td>`;
      new_row_content += `<td><input type="text" onkeyup="calculation()" value="1" id="Quantity_id_${counter}" /></td>`;
      new_row_content += `<td><input type="text" onkeyup="calculation()" value="" id="Price_1_id_${counter}" /></td>`;
      new_row_content += `<td><input type="text" value="" id="Row_Total_id_${counter}" /></td>`;

      new_row_content += `<td><button class="btn btn-danger" id="delete_row_id_${counter}" onclick="Delete_Row(this.id)">X</button></td>`;

      var tbody_length = tbody.rows.length;
      var added_new_row = tbody.insertRow(tbody_length);
      added_new_row.id = `row_id_${counter}`;

      added_new_row.innerHTML = new_row_content;
    }

    document.getElementById('search_input').value = '';

    counter++;

    set_counter();
  }
}

function set_counter() {
  const tbody_length = tbody.rows.length;
  for (let index = 0; index < tbody_length; index++) {
    const ID = tbody.rows[index].id;
    const id_to_arr = ID.split('_');

    document.getElementById(`counter_id_${id_to_arr[2]}`).innerHTML = index + 1;
  }
}

function calculation() {
  const tbody = document.getElementById('sales_tbody');
  const tbody_length = tbody.rows.length;

  let total_price = 0;

  for (let index = 0; index < tbody_length; index++) {
    const ID = tbody.rows[index].id;
    const id_to_arr = ID.split('_');

    // alert(id_to_arr[2]);
    const row_quantity = parseFloat(document.getElementById(`Quantity_id_${id_to_arr[2]}`).value);
    const row_price = parseFloat(document.getElementById(`Price_1_id_${id_to_arr[2]}`).value);

    total_price += (row_quantity * row_price);

    document.getElementById(`Row_Total_id_${id_to_arr[2]}`).value = (row_quantity * row_price).toFixed(2);
  }

  document.getElementById('total_input').value = total_price.toFixed(2);

  discount();
}

function discount() {
  const total = parseFloat(document.getElementById('total_input').value);
  const discount_input = parseFloat(document.getElementById('discount_input').value);

  const after_discount = total - ((10 * total) / 100);
  document.getElementById('final_price_input').value = after_discount.toFixed(2);
}

function Delete_Row(id) {
  const id_to_arr = id.split('_');
  document.getElementById(`row_id_${id_to_arr[3]}`).remove();
  set_counter();
  calculation();
}