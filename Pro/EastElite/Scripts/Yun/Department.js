﻿var DFBGDepartment = { FlieShare: {} }; DFBGDepartment.FlieShare.Flie = {
    MyFileLoad: function (FileId, Name, UrlLoad, Url) {
        var GroupId = arguments.length > 4 ? arguments[4] : ""; var _base = DFBGFlie.Flie.FlieOperation; _base.AjaxList(UrlLoad, { FileId: FileId, SearchName: Name, GroupId: GroupId }, function (re, status) {
            var data = re.model; if (status == "success") {
                var htmlInfo = ""; var htmlList = ""; if (data.length != 0) {
                    $("#SumNum").html("已全部加载，共" + data.length + "个"); for (var i = 0; i < data.length; i++) {
                        var model = data[i]; htmlInfo += '<li id="add' + model.FileId + '" href="javascript:;" class="grid-view-item open-enable" style="display: block;">'; htmlInfo += ' <div class="FileShow"  title="' + model.FileName + '">'; if (model.IsFolder == true) { htmlInfo += " <div onclick=\"DFBGDepartment.FlieShare.Flie.FileClick('" + model.FileId + "','" + model.FileName + "','" + Url + "')\">" } else { htmlInfo += " <div onclick=\"DFBGFlie.Flie.FlieOperation.FileShowControl('" + model.FileExtName + "','" + model.FileId + "')\">" } if (model.IsFolder == true) { htmlInfo += '<span  class="fileicon dir-large">' } else { switch (model.FileExtName) { case ".jpg": case ".png": case ".jpeg": case ".gif": case ".bmp": htmlInfo += '<span  class="fileicon fileicon-large-pic fileicon-all">'; htmlInfo += '<img class="thumb db-none" style="width:100px;height:100px;" data-url="/File/ImgSuoLue?FileId=' + model.FileId + '" src="">'; break; case ".docx": case ".doc": case ".dot": case ".docm": htmlInfo += '<span  class="fileicon fileicon-large-doc">'; break; case ".xls": case ".xlsx": htmlInfo += '<span  class="fileicon fileicon-large-xls">'; break; case ".txt": htmlInfo += '<span  class="fileicon fileicon-large-txt">'; break; case ".rar": case ".7z": htmlInfo += '<span  class="fileicon fileicon-large-rar">'; break; case ".zip": htmlInfo += '<span  class="fileicon fileicon-large-zip">'; break; case ".pdf": htmlInfo += '<span  class="fileicon fileicon-large-pdf">'; break; case ".flv": case ".mp4": case ".mkv": case ".rmvb": case ".avi": case ".swf": case ".wmv": case ".3gp": case ".mpeg": case ".mpg": case ".rm": case ".asf": case ".mov": case ".smi": htmlInfo += '<span  class="fileicon fileicon-large-video">'; break; case ".psd": htmlInfo += '<span  class="fileicon fileicon-large-psd">'; break; case ".mp3": case ".wma": case ".wav": htmlInfo += '<span  class="fileicon fileicon-large-mp3">'; break; case ".ppt": case ".pptx": case ".pptm": htmlInfo += '<span  class="fileicon fileicon-large-ppt">'; break; case ".xmind": htmlInfo += '<span  class="fileicon fileicon-large-xmind">'; break; default: htmlInfo += '<span  class="fileicon fileicon-all">'; break } } htmlInfo += "</span>"; htmlInfo += "</div>"; htmlInfo += "<label onmousedown=\"ClickSelCss('add" + model.FileId + '\')" class="checkbox"></label>'; htmlInfo += "</div>"; if (model.FileName.length > 6) { htmlInfo += '<div class="file-name"><span title="' + model.FileName + '" class="filename">' + model.FileName.substr(0, 6) + "...</span></div> " } else { htmlInfo += '<div class="file-name"><span title="' + model.FileName + '" href="javascript:void(0);" class="filename">' + model.FileName + "</span></div>" } htmlInfo += "</li>"; htmlList += '<div class="g-clearfix list-view-item open-enable">'; if (model.IsFolder == true) { htmlList += '<input type="checkbox" onclick="YzCheAll()" class="checkbox1" name="cheName" value="' + model.FileId + '" />'; htmlList += '<div class="fileicon  dir-small"></div>' } else { htmlList += '<input type="checkbox" onclick="YzCheAll()" class="checkbox1" name="cheName" value="' + model.FileId + '" />'; switch (model.FileExtName) { case ".jpg": case ".png": case ".jpeg": case ".gif": case ".bmp": htmlList += '<div  class="fileicon fileicon-small-pic"></div>'; break; case ".docx": case ".doc": case ".dot": case ".docm": htmlList += '<div  class="fileicon fileicon-small-doc"></div>'; break; case ".xls": case ".xlsx": htmlList += '<div  class="fileicon fileicon-small-xls"></div>'; break; case ".txt": htmlList += '<div  class="fileicon fileicon-small-txt"></div>'; break; case ".rar": case ".7z": htmlList += '<div  class="fileicon fileicon-small-rar"></div>'; break; case ".zip": htmlList += '<div  class="fileicon fileicon-small-zip"></div>'; break; case ".pdf": htmlList += '<div  class="fileicon fileicon-small-pdf"></div>'; break; case ".flv": case ".mp4": case ".mkv": case ".rmvb": case ".avi": case ".swf": case ".wmv": case ".3gp": case ".mpeg": case ".mpg": case ".rm": case ".asf": case ".mov": case ".smi": htmlList += '<div  class="fileicon fileicon-small-video"></div>'; break; case ".exe": htmlList += '<div  class="fileicon fileicon-small-exe"></div>'; break; case ".psd": htmlList += '<div  class="fileicon fileicon-small-psd"></div>'; break; case ".mp3": case ".wma": case ".wav": htmlList += '<div  class="fileicon fileicon-small-mp3"></div>'; break; case ".ppt": case ".pptx": case ".pptm": htmlList += '<div  class="fileicon fileicon-small-ppt"></div>'; break; case ".xmind": htmlList += '<div  class="fileicon fileicon-small-xmind"></div>'; break; default: htmlList += '<div  class="fileicon fileicon-small"></div>'; break } } htmlList += '<div style="width: 50%" class="file-name">'; htmlList += '<div class="text">'; if (model.IsFolder == true) { htmlList += "<a onclick=\"DFBGDepartment.FlieShare.Flie.FileClick('" + model.FileId + "','" + model.FileName + "','" + Url + '\')"  class="filename" href="#" title="' + model.FileName + '">' + model.FileName + "</a></div>" } else {
                            htmlList += "<a onclick=\"DFBGFlie.Flie.FlieOperation.FileShowControl('" + model.FileExtName + "','" + model.FileId + '\')" class="filename" href="#" title="' + model.FileName + '">' + model.FileName + "</a></div>"
                        } htmlList += '<div class="operate">'; htmlList += '<div style="position: absolute; top: 0px; padding-top: 0px; line-height: normal;">'; if (model.IsFolder != true) { htmlList += '<a href="/File/DownFile?FileId=' + model.FileId + '" class="g-button" style=""><span class="g-button-right"><em title="下载" class="icon icon-download-blue"></em></span></a>' } else { } htmlList += "    </div>"; htmlList += "</div>"; htmlList += "</div>"; htmlList += '<div style="width: 16%" class="file-size">' + DFBGFlie.Flie.FlieOperation.GetFileSize(model.FileSizeKb) + "</div>"; var date = new Date(parseInt(model.FileCreateTime.replace("/Date(", "").replace(")/", ""), 10)); htmlList += '<div style="width: 10%" class="ctime">已分享</div>'; htmlList += '<div style="width: 10%" class="ctime">' + model.CreateName + "</div>"; htmlList += '<div style="width: 13%" class="ctime">' + date.Format("yyyy-MM-dd hh:mm") + "</div>"; htmlList += "</div>"; htmlList += "</div>"
                    }
                } else { htmlList += '<div class="aGMvFtb">'; htmlList += '<div class="hqvyGW05 wegnv3JM">'; htmlList += '<p class="ggEQwFb">'; htmlList += " 还没分享文件哦"; htmlList += "</p>"; htmlList += "</div>"; htmlList += "</div>"; htmlInfo = htmlList } $("#FileShowList").html(htmlList); $("#FileShow").html(htmlInfo); $(".module-list-view .list-view-item").hover(function () { $(this).children(".file-name").children(".operate").toggle() }); if ($(".list-view-item").length > 3) { $(".list-view-item:last .operate .menu").css({ "left": "-40px", "top": "-50px" }) } var optionImg = new OptionFile(); $(".module-grid-view .grid-view li").on("mousedown", function (e) { e.preventDefault(); e.stopPropagation(); var activelength = $(".item-active").length; var loop = setTimeout(function () { optionImg.optionDown(activelength, 1, e); $(document).mousemove(function (e) { optionImg.optionMoving(activelength, 1, e); optionImg.closeOption(function (e, keycode) { var target = e.target.className; $("#select").remove(); if (target == "filename" || target == "fileicon dir-large" || target == "grid-view-item open-enable") { var MoveFileId = ""; var treeviewId = ""; var swich = getCookie("ShowType"); if (swich == "grid") { var cssId = $(".item-active"); for (var i = 0; i < cssId.length; i++) { MoveFileId += cssId[i].id + "," } } switch (target) { case "filename": treeviewId = $(e.target).parent().parent().attr("id").replace("add", ""); break; case "fileicon dir-large": treeviewId = $(e.target).parent().parent().parent().attr("id").replace("add", ""); break; case "grid-view-item open-enable": treeviewId = $(e.target).attr("id").replace("add", ""); break; default: break } if (treeviewId != "") { _base2.TuoMoVe(MoveFileId, treeviewId) } } }) }) }, 200); $(document).mouseup(function () { clearTimeout(loop) }) }); _base.SetContainerHeight(); $("img").load(function () { $(this).hide(); $(this).stop().fadeIn("5000") }); $(".grid-view-item").scrollLoading()
            }
        })
    }, InFileOnlode: function (fileId, Url) { DFBGFlie.Flie.FlieOperation.AjaxHtml("/File/Navigation", { parentFileId: fileId, Url: Url }, function (data) { if (data != "") { $("#TitleIds").append(data) } }, true) }, FileClick: function (fileId, FileName, Url) { window.location.href = Url + fileId }
};