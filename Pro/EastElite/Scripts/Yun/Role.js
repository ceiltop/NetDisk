﻿function Query(a) { DFBGFlie.Flie.FlieOperation.AjaxList("/Role/GetAgencyCodeNameList", {}, function (j) { var h = j.AgencyList; var k = $("#AgencyList"); for (var g = 0; g < h.length; g++) { k.append('  <option value="' + h[g].AgencyCode + '">' + h[g].RootName + "-" + h[g].AgencyName + "</option>") } }, true); var b = ["StaffCode", "StaffName", "AgencyName", "操作"]; var f = "/Ajax/GetUserList"; var e = $("#AgencyList").val().trim(); var d = $("#UserName").val().trim(); var c = ""; if (e != null && e != "") { c = e } if (d != null && d != "") { c += "★" + d } GetData(f, b, a, c) } function SetOperate(a) { var b = '<td align="center">'; b += "<span class='btn btn-primary' style=\"color:#fff;\" onclick=\"RoleShow('" + a.StaffCode + "')\">分配权限</span>"; b += "</td>"; return b } function RoleShow(a) { DFBGFlie.Flie.FlieOperation.AjaxHtml("/Role/RoleShow", { UserId: a }, function (b) { if (b != "") { parent.$("#popup_container").html(b); $.dingwei("popup_container", "popup_overlay", "parent") } }, true) };