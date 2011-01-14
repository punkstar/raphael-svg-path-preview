var width = 800;
var height = 400;

var c = Raphael("canvas", width, height);

reset_canvas();

$("#path_spec").change(updated_path);
$("#path_submit").click(updated_path);

function updated_path() {
    var path = $("#path_spec").val();
    
    reset_canvas();
    c.path(path).attr({stroke: "white"});
}

function reset_canvas() {
    c.rect(0, 0, width, height, 10).attr({fill: "#B4B2A3", stroke: "none"});
}