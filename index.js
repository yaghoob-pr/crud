$("form").submit((e) => {
  e.preventDefault();
  const firstn = $("#firstn").val();
  const lastn = $("#lastn").val();
  const mobile = $("#mobile").val();
  const email = $("#email").val();

  $("table tbody").append(
    `<tr email=${email}firstn=${firstn} lastn=${lastn} mobile=${mobile}>
        <td>${firstn}</td><td>${lastn}</td><td>${mobile}</td><td>${email}</td>
        <td><button id='edit-btn' class='btn btn-warning mx-2'>Edit</button> <button  id='delete-btn' class='btn btn-danger'>delete</button></td></tr>`
  );
});

$(document).on("click", "#delete-btn", function (e) {
  $(this).parents("tr").remove();
});

$(document).on("click", "#edit-btn", function (e) {
  const email = $(this).parents("tr").attr("email");
  const firstn = $(this).parents("tr").attr("firstn");
  const lastn = $(this).parents("tr").attr("lastn");
  const mobile = $(this).parents("tr").attr("mobile");

  $(this)
    .parents("tr")
    .find("td:eq(2)")
    .html(`<input name='email' value='${email}'>`);

  $(this)
    .parents("tr")
    .find("td:eq(0)")
    .html(`<input name='firstn' value='${firstn}'>`);

  $(this)
    .parents("tr")
    .find("td:eq(1)")
    .html(`<input name='lastn' value='${lastn}'>`);

  $(this)
    .parents("tr")
    .find("td:eq(3)")
    .html(`<input name='mobile' value='${mobile}'>`);

  $(this)
    .parents("tr")
    .find("td:eq(4)")
    .prepend(`<button id='update-btn' class='btn primary-btn'>update</button>`);
});

$(document).on("click", "#update-btn", function () {
  const email = $(this).parents("tr").find("input[name='email']").val();
  const firstn = $(this).parents("tr").find("input[name='firstn']").val();
  const lastn = $(this).parents("tr").find("input[name='lastn']").val();
  const mobile = $(this).parents("tr").find("input[name='mobile']").val();
  $(this).parents("tr").find("td:eq(0)").text(firstn);
  $(this).parents("tr").find("td:eq(1)").text(lastn);
  $(this).parents("tr").find("td:eq(2)").text(email);
  $(this).parents("tr").find("td:eq(3)").text(mobile);

  $(this).parents("tr").attr("email", email);
  $(this).parents("tr").attr("firstn", firstn);
  $(this).parents("tr").attr("lastn", lastn);
  $(this).parents("tr").attr("mobile", mobile);
});
