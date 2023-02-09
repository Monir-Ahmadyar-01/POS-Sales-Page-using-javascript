
var counter = 1;
function add_row(search_value)
{
    if(event.key == "Enter")
    {

        var tbody = document.getElementById('sales_tbody');

        var tbody_length = tbody.rows.length;
        
        if(tbody_length > 0)
        {
            var check = Array();
            for (var i = 0; i < tbody_length; i++) {
                var ID = tbody.rows[i].id;
                var id_to_arr = ID.split('_');
                
                var td_input_value = document.getElementById('product_id_'+id_to_arr[2]).value;

                if (search_value == td_input_value) {
                    var Quantity_td_value = document.getElementById('Quantity_id_'+id_to_arr[2]).value;
                    var New_Quantity_Value = parseFloat(Quantity_td_value) + 1;
                    document.getElementById('Quantity_id_'+id_to_arr[2]).value = New_Quantity_Value;
                    check.push('true');
                }
                else
                {
                    check.push('false');
                }
                
            }

            
            
            if(check.includes("true") == false)
            {
                var new_row_content='';
                new_row_content += '<td>'+counter+'</td>';
                new_row_content += '<td id="product_td_'+counter+'"><input type="text" value="'+search_value+'" id="product_id_'+counter+'" /></td>';
                new_row_content += '<td><input type="text" value="1" id="Quantity_id_'+counter+'" /></td>';
                new_row_content += '<td><input type="text" value="" id="Price_1_id_'+counter+'" /></td>';
                new_row_content += '<td><input type="text" value="" id="Row_Total_id_'+counter+'" /></td>';
        
                new_row_content += '<td><button>X</button></td>';
        
                var tbody_length = tbody.rows.length;
                var added_new_row = tbody.insertRow(tbody_length);
                added_new_row.id = 'row_id_'+counter;
        
                added_new_row.innerHTML = new_row_content;
            }
            else
            {

            }

        }
        else
        {
            var new_row_content='';
            new_row_content += '<td>'+counter+'</td>';
            new_row_content += '<td id="product_td_'+counter+'"><input type="text" value="'+search_value+'" id="product_id_'+counter+'" /></td>';
            new_row_content += '<td><input type="text" value="1" id="Quantity_id_'+counter+'" /></td>';
            new_row_content += '<td><input type="text" value="" id="Price_1_id_'+counter+'" /></td>';
            new_row_content += '<td><input type="text" value="" id="Row_Total_id_'+counter+'" /></td>';
     
            new_row_content += '<td><button>X</button></td>';
    
            var tbody_length = tbody.rows.length;
            var added_new_row = tbody.insertRow(tbody_length);
            added_new_row.id = 'row_id_'+counter;
    
            added_new_row.innerHTML = new_row_content;
        }



        document.getElementById("search_input").value ='';
    



        counter++;
    }

    
}