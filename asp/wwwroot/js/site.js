$(document).ready(function () {
    $('.itemsMenu>a').click(function () {
        $('.itemsMenu>a').removeClass('active');
        if ($(this).next('.dropMenu').css("display") == "none") {
            $('.dropMenu').hide('normal');
            $(this).next('.dropMenu').toggle('normal');
            $('.itemsMenu>a').removeClass('active');
            $(this).toggleClass('active');
        } else $('.dropMenu').hide('normal');
        return false;
    });
});

let position = 0;
let shag = 1008.5;
$('.CustomerFeedback-Review_ButtonLeft').on('click', function () {
    $('.CustomerFeedback-Review_ButtonLeft').css('opacity', '50%')
    position = position - shag
    if (position < 0) {
        position = shag
        $('.CustomerFeedback-Review-slider-block').css('left', '-' + position + 'px')
    }
    else {
        $('.CustomerFeedback-Review-slider-block').css('left', +position + 'px')
    }
    $('.CustomerFeedback-Review_ButtonLeft').css('opacity', '100%')
})
$('.CustomerFeedback-Review_ButtonRight').on('click', function () {
    $('.CustomerFeedback-Review_ButtonRight').css('opacity', '50%')
    position = position + shag
    if (position > shag) {
        position = 0
        $('.CustomerFeedback-Review-slider-block').css('left', position + 'px')
    }
    else {
        $('.CustomerFeedback-Review-slider-block').css('left', '-' + position + 'px')
    }
    $('.CustomerFeedback-Review_ButtonRight').css('opacity', '100%')
});

let = contextMenu = $('.context-menu-open');
$('.context-menu').on('contextmenu', function (e) {
    e.preventDefault();
    contextMenu.css({ top: e.clientY + 'px', left: e.clientX + 'px' });
    contextMenu.show();
});
$(document).on('click', function () {
    contextMenu.hide();
});

$(document).on("click", ".footer_GoTop", function (e) {
    e.preventDefault();
    $('body, html').animate({ scrollTop: 0 }, 800);
});
/********************* */
const contentDiv = document.getElementById(".table-coffee-info_type");
 
const xhr = new XMLHttpRequest();
xhr.onload = () => {
    if (xhr.status == 200) {
        const xmlDoc = xhr.responseXML;
        const table = createTable();      
        // выбираем все элементы user     
        const users = xmlDoc.getElementsByTagName("type");      
        for (let i = 0; i < users.length; i++) { 
            const user = users[i];        
            const InStock = user.getAttribute("InStock");
            const row = createRow(InStock);            
            table.appendChild(row);        
        }      
        contentDiv.appendChild(table);
    }
};
xhr.open("GET", "/data");
xhr.responseType = "document"; 
xhr.setRequestHeader("Accept", "Coffe/xml");
xhr.send();
 
// создаем таблицу
function createTable() {  
    const table = document.createElement("table");   
    const headerRow = document.createElement("tr");   
    headerRow.appendChild(nameColumnHeader);  
    headerRow.appendChild(ageColumnHeader);  
    headerRow.appendChild(contactColumnHeader);
    table.appendChild(headerRow);
    return table;
}
// создаем одну строку для таблицы
function createRow(userName, userAge, userContact) {  
    const row = document.createElement("tr");  
    const nameColumn = document.createElement("td");  
    const ageColumn = document.createElement("td");  
    const contactColumn = document.createElement("td");  
    nameColumn.appendChild(document.createTextNode(userName));  
    ageColumn.appendChild(document.createTextNode(userAge));  
    contactColumn.appendChild(document.createTextNode(userContact));  
    row.appendChild(nameColumn);  
    row.appendChild(ageColumn);  
    row.appendChild(contactColumn);  
    return row;
}