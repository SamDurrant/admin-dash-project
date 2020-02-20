import data from './data.js';

function main() {
  $('[data-toggle="tooltip"]').tooltip();
  $('#itemTable').DataTable({
    data: data.dataSet,
    columns: [
      { title: "Amount" },
      { title: "Name" },
      { title: "Calories" },
      { title: "Carbs" },
      { title: "Fat" },
      { title: "Protein" },
    ],
    "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
    "dom": '<"top pagination-center my-3" lf>t<"bottom pagination-center mt-3" ip><"clear">'
});
}

$(main());