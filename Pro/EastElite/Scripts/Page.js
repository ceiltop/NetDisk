﻿function SetOperate(a) { return "<td>操作</td>" } function GetData(d, b, a, c) { if (a <= 0) { a = 1 } $.post(d, { pageIndex: a, strWhere: c }, function (e) { a = e.pageIndex; BondData(e.model, b, a); Page(a, e.pageCount, b.length) }) } function BondData(e, d, b) { if (e != null && e.length > 0) { var f = $(".gridView tr")[0]; $(".gridView  tr:not(:first)").remove(""); var h = e.length; for (i = 0; i < h; i++) { var a = "<tr>"; for (j = 0; j < d.length; j++) { if (d[j] == "操作") { var c = SetOperate(e[i]); a = a + c } else { if (d[j] == "序号") { a = a + '<td  align="center"><input name="Checkbox" type="checkbox" value ="' + e[i].Id + '" /></td>' } else { if (d[j] == "状态") { var c = SetState(e[i]); a = a + c } else { if (e[i][d[j]] != null) { var g = e[i][d[j]].toString(); if (g.indexOf("Date") > -1) { a = a + '<td  align="center">' + Todata(g) + "</td>" } else { a = a + '<td  align="center">' + g + "</td>" } } else { a = a + "<td>&nbsp;</td>" } } } } } a = a + "</tr>"; $(".gridView").append(a) } } else { $(".gridView  tr:not(:first)").remove("") } } function Page(b, c, d) { if (c > 0) { var a = '<tr><td colspan ="' + d + '" style=\'padding:0px;\' > <div id="dyntable_info" class="dataTables_info"> &nbsp;  <ul class="dataTables_paginate paging_full_numbers">'; if (b == 1 && (c == 1)) { a = a + ' <li class="NoNothink"><a class="first paginate_button paginate_button_disabled NoNothink2">首页</a></li>'; a = a + '<li class="NoNothink"><a class="previous paginate_button paginate_button_disabled NoNothink2">上一页</a></li>'; a = a + '<li class="NoNothink"><a class="next paginate_button paginate_button_disabled NoNothink2">下一页</a></li>'; a = a + '<li class="NoNothink"><a class="last paginate_button paginate_button_disabled NoNothink2">尾页</a></li>' } else { if (b == 1) { a = a + ' <li class="NoNothink"><a class="first paginate_button paginate_button_disabled NoNothink2">首页</a></li>'; a = a + ' <li class="NoNothink"><a class="previous paginate_button paginate_button_disabled NoNothink2">上一页</a></li>'; a = a + ' <li class="NoNothink"><a onclick=Query(' + (b + 1) + ') class="next paginate_button NoNothink2">下一页</a></li>'; a = a + ' <li class="NoNothink"><a class="next paginate_button NoNothink2" onclick=Query(' + c + ")>尾页</a></li>" } else { if (b == c) { a = a + ' <li class="NoNothink"><a  onclick=Query(1) class="first paginate_button NoNothink2">首页</a></li>'; a = a + ' <li class="NoNothink"><a onclick=Query(' + (b - 1) + ') class= "first paginate_button NoNothink2">上一页</a></li>'; a = a + ' <li class="NoNothink"><a class="next paginate_button paginate_button_disabled NoNothink2">下一页</a></li>'; a = a + '<li class="NoNothink"><a class="last paginate_button paginate_button_disabled NoNothink2">尾页</a></li>' } else { a = a + ' <li class="NoNothink"><a  onclick=Query(1) class="first paginate_button NoNothink2">首页</a></li>'; a = a + '<li class="NoNothink"><a onclick=Query(' + (b - 1) + ') class= "first paginate_button NoNothink2">上一页</a></li>'; a = a + ' <li class="NoNothink"><a onclick=Query(' + (b + 1) + ') class="next paginate_button NoNothink2">下一页</a></li>'; a = a + ' <li class="NoNothink"><a class="next paginate_button NoNothink2" onclick=Query(' + c + ")>尾页</a></li>" } } } a = a + ToPageSelect(b, c); a = a + "</td></tr>"; $(".gridView").append(a) } } function ToPageSelect(b, c) { var a = '<select id="CurrentPage" onchange=Query(this.value) class="goto">'; for (i = 1; i <= c; i++) { if (i == b) { a = a + '<option selected="selected" value=' + i + ">" + i + "</option>" } else { a = a + "<option value=" + i + ">" + i + "</option>" } } a = a + "</select>"; return a } function Todata(value) { value = eval(value.replace(/\/Date\((\d+)\)\//gi, "new Date($1)")); var date = new Date(value); return date.Format("yyyy-MM-dd") };