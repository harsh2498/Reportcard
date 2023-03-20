$(document).ready(function () {
    $(".showresult").on("click", function () {
        // To find current row
        var currentrow = $(this).closest("tr");
        // To find column data of that particular row
        var col1 = currentrow.find("td:eq(0)").text();
        var col2 = currentrow.find("td:eq(1)").text();
        var col3 = currentrow.find("td:eq(2)").text();
        var col4 = currentrow.find("td:eq(3)").text();
        var col5 = currentrow.find("td:eq(4)").text();
        var col6 = currentrow.find("td:eq(5)").text();
        var sum = Number(col2) + Number(col3) + Number(col4) + Number(col5) + Number(col6);
        var percent = ((sum / 500) * 100);
        var grade;
        var remark;
        if(percent>90){
            grade="A+";
            remark="Outstanding";
        }
        else if (percent>80)
        {
            grade="A";
            remark="Excellent";
        }
        else if(percent>70)
        {
            grade="B+";
            remark="very good";
        }
        else if(percent>60)
        {
            grade="B";
            remark="good";
        }
        else
        {
            grade="fail";
            remark="Improve";
        }
        $(".report").html(
            `<h2><u>Report card</u></h2>
            Name : ${col1}<br>
            Class :10th C<br>
            Total marks Scored : ${sum}<br>
            Maximum Marks : 500<br>
            Percentage : ${percent}<br>
            Grade : ${grade}<br>
            Remark : ${remark}`
        )

    })
})
