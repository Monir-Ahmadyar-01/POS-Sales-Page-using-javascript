
var counter = 1;
function add_row(search_value)
{
    if(event.key == "Enter")
    {

        var tbody = document.getElementById('sales_tbody');

        var tbody_length = tbody.rows.length;
        
        if(tbody_length > 0)
        {
            for (var i = 0; i < tbody_length; i++) {
                var ID = tbody.rows[i].id;
                var id_to_arr = ID.split('_');
                // var cells = tbody.rows[i].getElementById('product_id_'+id_to_arr[2]);
                // for (var ic=0,it=cells.length;ic<it;ic++) {
                //     // alert the table cell contents
                //     // you probably do not want to do this, but let's just make
                //     // it SUPER-obvious  that it works :)
                //     alert(cells[ic].innerHTML);
                // }
    
                alert('product_id_'+id_to_arr[2]);
    
    
            }
        }
        else
        {

        }

        




        
        var new_row_content='';
        new_row_content += '<td>'+counter+'</td>';
        new_row_content += '<td><input type="text" value="'+search_value+'" id="product_id_'+counter+'" /></td>';
        new_row_content += '<td><input type="text" value="1" id="Quantity_id_'+counter+'" /></td>';
        new_row_content += '<td><input type="text" value="" id="Price_1_id_'+counter+'" /></td>';
        new_row_content += '<td><input type="text" value="" id="Row_Total_id_'+counter+'" /></td>';
 
        new_row_content += '<td><button>X</button></td>';

       


        var tbody_length = tbody.rows.length;
        var added_new_row = tbody.insertRow(tbody_length);
        added_new_row.id = 'row_id_'+counter;

        added_new_row.innerHTML = new_row_content;


        document.getElementById("search_input").value ='';
    



        counter++;
    }

    
}