// Начальные данные
var d = document;
var counter = 0;


// Самая первая загрузка страницы, если пустой localStorage
if ((localStorage.counter === undefined) || (localStorage.counter === null)) {
 var counter = 0;
} else counter = localStorage.counter;

// Обработчик кнопки "Сохранить"
$('#submit').on('click', function() {
  // Запись всех значений в объект
  var tdStrObj = {
    name: d.getElementById('name').value,
    surname: d.getElementById('surname').value,
    patronymic: d.getElementById('patronymic').value,
    books: {
        bookTitle: $('#bookTitleId').val(),
        bookGenre: $('#bookGenreId').val(),
        bookPages: $('#bookPagesId').val()
    }
  }
  // Отправка объекта в виде строки JSON в localStorage
  localStorage.setItem('all'+counter, JSON.stringify(tdStrObj));
  // Отображение в таблице введеных данных про автораи книжки
  $('#table-outer tbody').append('<tr id="out-row"><td id="editdelete"><img id="edit" src="images/edit.png"><button id="delete" href="#"><img src="images/delete.png"></button></td><td id="name-outer"></td><td id="surname-outer"></td><td id="patronymic-outer"></td><td id="books-outer"></td></tr>');
    // Добавление новых айдишек
    $('#out-row').attr('id', 'out-row'+counter);
    $('#edit').attr('id', 'edit'+counter);
    $('#delete').attr('id', 'delete'+counter);
    $('#name-outer').attr('id', 'name-outer'+counter);
    $('#surname-outer').attr('id', 'surname-outer'+counter);
    $('#patronymic-outer').attr('id', 'patronymic-outer'+counter);
    $('#books-outer').attr('id', 'books-outer'+counter);
    // Вытягивание JSON строки из localStorage в переменную
    var tdStr = JSON.parse(localStorage.getItem('all'+counter));
    // Вывод значений в столбцы таблицы
    $('#name-outer'+counter).html(tdStr.name);
    $('#surname-outer'+counter).html(tdStr.surname);
    $('#patronymic-outer'+counter).html(tdStr.patronymic);
    $('#books-outer'+counter).html(tdStr.books.bookTitle+'<br>'+
                           tdStr.books.bookGenre+'<br>'+
                           tdStr.books.bookPages);
    // Увеличение счетчика
    counter++;
    // Добавление счетчика в localStorage
    localStorage.setItem('counter', counter);
})



// Обработчик нажатия на кнопку удаления соответствующей строки
$('#table-outer').on('click','tbody tr td button',function(e){
  e.preventDefault();
  // Возврат id кнопки
  var idishka = $(this).attr('id');
  // Подстрока - номер строки, которую удалять
  var substr = idishka.substring(idishka.length-1);
  var intsubstr = parseInt(substr, 10);
  localStorage.removeItem('all'+intsubstr);
  $(this).parents('tr').remove();



  var counter = parseInt(localStorage.getItem('counter'))-1;
  localStorage.setItem('counter', counter);
});


$('#reset').click(function() {
  $('#table-body').empty();
  localStorage.clear();
  counter = 0;
});

// $('#download').click(function() {
//   $('#table-body').empty();
//   for (var i = 0; i < localStorage.length-1; i++) {
//     $('#table-outer tbody').append('<tr id="out-row"><td id="editdelete"><img id="edit" src="images/edit.png"><button id="delete" href="#"><img src="images/delete.png"></button></td><td id="name-outer"></td><td id="surname-outer"></td><td id="patronymic-outer"></td><td id="books-outer"></td></tr>');
   
//     $('#out-row').attr('id', 'out-row'+i);

//     $('#edit').attr('id', 'edit'+i);
//     $('#delete').attr('id', 'delete'+i);

//       $('#name-outer').attr('id', 'name-outer'+i);
//       $('#surname-outer').attr('id', 'surname-outer'+i);
//       $('#patronymic-outer').attr('id', 'patronymic-outer'+i);
//       $('#books-outer').attr('id', 'books-outer'+i);


//       for (var j in localStorage) {
//           // console.log(j, ' = ', localStorage[j]);
//           // $('#name-outer'+i).html(localStorage.getItem('all'+i));
//            var fOut = JSON.parse(localStorage.getItem('all'+i));
//           console.log(fOut);
//         // $('#name-outer'+i).html(fOut.name);
//         // $('#surname-outer'+i).html(fOut.surname);
//         // $('#patronymic-outer'+i).html(fOut.patronymic);
//         // $('#books-outer'+i).html(fOut.books.bookTitle+'<br>'+
//         //                               fOut.books.bookGenre+'<br>'+
//         //                               fOut.books.bookPages);
//       }


//     // var values = [],
//     //      keys = Object.keys(localStorage),
//     //      j = keys.length;

//     // while ( j-- ) {
//     //     var total = values.push( localStorage.getItem(keys[i]) );
//     //     console.log(total);
//     // }


//         // var fOut = JSON.parse(localStorage.getItem('all'+i));
        
//         // $('#name-outer'+i).html(fOut.name);
//         // $('#surname-outer'+i).html(fOut.surname);
//         // $('#patronymic-outer'+i).html(fOut.patronymic);
//         // $('#books-outer'+i).html(fOut.books.bookTitle+'<br>'+
//         //                               fOut.books.bookGenre+'<br>'+
//         //                               fOut.books.bookPages);
//   }
// });


