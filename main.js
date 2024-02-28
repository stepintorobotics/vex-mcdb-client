let award, awards, award_item, award_list, award_name, award_event;
let target_div, target_inst, target_num, target_type, endpoint;
let target_event = 52066;
let awards_exc, awards_tc, awards_skills;
let manual1, manual2, manual3, manual4, match_type;
let url_base = "http://142.93.46.118:5000/"

function fetch_match_iq(team1, team2) {
    if (Number(document.getElementById("selected_event").value) == 0) {
        target_event = 52066;
    } else if (Number(document.getElementById("selected_event").value)) {
        target_event = 52213;
    } else if (Number(document.getElementById("selected_event").value)) {
        target_event = 52215;
    } else if (Number(document.getElementById("selected_event").value)) {
        target_event = 52216;
    }
    fetch(url_base + "stats/" + target_event + "/" + team1 + "/" + team2)
    .then(response => response.json())
    .then(data => {
        if (data["season"] == 181) {
            document.getElementById("iq").classList.add("hidden");
        } else {
            document.getElementById("vrc").classList.add("hidden");
        }
        document.getElementById("iq1_number").innerHTML = data["teams"].iq1["team_number"];
        document.getElementById("iq1_name").innerHTML = data["teams"].iq1["team_name"];
        document.getElementById("iq1_grade").innerHTML = data["teams"].iq1["team_grade"].toUpperCase();
        document.getElementById("iq1_organisation").innerHTML = data["teams"].iq1["team_organisation"];
        document.getElementById("iq1_city").innerHTML = data["teams"].iq1["team_city"];
        document.getElementById("iq1_matches_total").innerHTML = data["teams"].iq1["matches_total"];
        document.getElementById("iq1_72_total").innerHTML = data["teams"].iq1["72_total"];
        document.getElementById("iq1_72_pct_total").innerHTML = data["teams"].iq1["72_pct_total"] + "%";
        document.getElementById("iq1_matches_event").innerHTML = data["teams"].iq1["matches_event"];
        document.getElementById("iq1_72_event").innerHTML = data["teams"].iq1["72_event"];
        document.getElementById("iq1_72_pct_event").innerHTML = data["teams"].iq1["72_pct_event"] + "%";
        document.getElementById("iq1_points_total").innerHTML = data["teams"].iq1["points_total"];
        document.getElementById("iq1_points_avg_total").innerHTML = data["teams"].iq1["points_avg_total"];
        document.getElementById("iq1_points_event").innerHTML = data["teams"].iq1["points_event"];
        document.getElementById("iq1_points_avg_event").innerHTML = data["teams"].iq1["points_avg_event"];
        document.getElementById("iq1_hs_total_score").innerHTML = data["teams"].iq1["team_hs_total"];
        document.getElementById("iq1_hs_total_match").innerHTML = data["teams"].iq1["team_hs_total_match"][0].toUpperCase();
        document.getElementById("iq1_hs_total_event").innerHTML = data["teams"].iq1["team_hs_total_match"][1];
        document.getElementById("iq1_hs_event_score").innerHTML = data["teams"].iq1["team_hs_event"];
        document.getElementById("iq1_hs_event_match").innerHTML = data["teams"].iq1["team_hs_event_match"].toUpperCase();
        awards = data["teams"].iq1["awards"];
        award_list = document.getElementById("iq1_awards");
        award_list.innerHTML = "<br>";
        awards_exc = 0;
        awards_tc = 0;
        awards_skills = 0;
        for (award of awards) {
            award_item = document.createElement("div");
            award_item.innerHTML = "<span class='award_title'>" + award[0] + "</span><span class='award_event'>" + award[1] + "</span>";
            award_list.appendChild(award_item);
            if (award[0] == "Excellence Award (VIQRC)" || award[0] == "Excellence Award - Elementary School (VIQRC)" || award[0] == "Excellence Award - Middle School (VIQRC)") {
                awards_exc += 1;
            } else if (award[0] == "Teamwork Champion Award (VIQRC)") {
                awards_tc += 1;
            } else if (award[0] == "Robot Skills Champion (VIQRC)") {
                awards_skills += 1;
            }
        }
        document.getElementById("iq1_awards_exc").innerHTML = awards_exc;
        document.getElementById("iq1_awards_tc").innerHTML = awards_tc;
        document.getElementById("iq1_awards_skills").innerHTML = awards_skills;

        document.getElementById("iq2_number").innerHTML = data["teams"].iq2["team_number"];
        document.getElementById("iq2_name").innerHTML = data["teams"].iq2["team_name"];
        document.getElementById("iq2_grade").innerHTML = data["teams"].iq2["team_grade"].toUpperCase();
        document.getElementById("iq2_organisation").innerHTML = data["teams"].iq2["team_organisation"];
        document.getElementById("iq2_city").innerHTML = data["teams"].iq2["team_city"];
        document.getElementById("iq2_matches_total").innerHTML = data["teams"].iq2["matches_total"];
        document.getElementById("iq2_72_total").innerHTML = data["teams"].iq2["72_total"];
        document.getElementById("iq2_72_pct_total").innerHTML = data["teams"].iq2["72_pct_total"] + "%";
        document.getElementById("iq2_matches_event").innerHTML = data["teams"].iq2["matches_event"];
        document.getElementById("iq2_72_event").innerHTML = data["teams"].iq2["72_event"];
        document.getElementById("iq2_72_pct_event").innerHTML = data["teams"].iq2["72_pct_event"] + "%";
        document.getElementById("iq2_points_total").innerHTML = data["teams"].iq2["points_total"];
        document.getElementById("iq2_points_avg_total").innerHTML = data["teams"].iq2["points_avg_total"];
        document.getElementById("iq2_points_event").innerHTML = data["teams"].iq2["points_event"];
        document.getElementById("iq2_points_avg_event").innerHTML = data["teams"].iq2["points_avg_event"];
        document.getElementById("iq2_hs_total_score").innerHTML = data["teams"].iq2["team_hs_total"];
        document.getElementById("iq2_hs_total_match").innerHTML = data["teams"].iq2["team_hs_total_match"][0].toUpperCase();
        document.getElementById("iq2_hs_total_event").innerHTML = data["teams"].iq2["team_hs_total_match"][1];
        document.getElementById("iq2_hs_event_score").innerHTML = data["teams"].iq2["team_hs_event"];
        document.getElementById("iq2_hs_event_match").innerHTML = data["teams"].iq2["team_hs_event_match"].toUpperCase();
        awards = data["teams"].iq2["awards"];
        award_list = document.getElementById("iq2_awards");
        award_list.innerHTML = "<br>";
        awards_exc = 0;
        awards_tc = 0;
        awards_skills = 0;
        for (award of awards) {
            award_item = document.createElement("div");
            award_item.innerHTML = "<span class='award_title'>" + award[0] + "</span><span class='award_event'>" + award[1] + "</span>";
            award_list.appendChild(award_item);
            if (award[0] == "Excellence Award (VIQRC)" || award[0] == "Excellence Award - Elementary School (VIQRC)" || award[0] == "Excellence Award - Middle School (VIQRC)") {
                awards_exc += 1;
            } else if (award[0] == "Teamwork Champion Award (VIQRC)") {
                awards_tc += 1;
            } else if (award[0] == "Robot Skills Champion (VIQRC)") {
                awards_skills += 1;
            }
        }
        document.getElementById("iq2_awards_exc").innerHTML = awards_exc;
        document.getElementById("iq2_awards_tc").innerHTML = awards_tc;
        document.getElementById("iq2_awards_skills").innerHTML = awards_skills;
    })
}

function fetch_match_vrc(team1, team2, team3, team4) {
    if (Number(document.getElementById("selected_event").value) == 0) {
        target_event = 52066;
    } else if (Number(document.getElementById("selected_event").value)) {
        target_event = 52213;
    } else if (Number(document.getElementById("selected_event").value)) {
        target_event = 52215;
    } else if (Number(document.getElementById("selected_event").value)) {
        target_event = 52216;
    }
    fetch(url_base + "stats/" + target_event + "/" + team1 + "/" + team2 + "/" + team3 + "/" + team4)
    .then(response => response.json())
    .then(data => {
        // If VRC, hide VIQC teams and vice versa
        if (data["season"] == 181) {
            document.getElementById("iq").classList.add("hidden");
        } else {
            document.getElementById("vrc").classList.add("hidden");
        }

        // Insert match information
        //document.getElementById("event_name").innerHTML = event_name;
        //document.getElementById("match_name").innerHTML = "<br><b>" + match_name + "</b>"

        // Insert data for VRC teams
        document.getElementById("red1_number").innerHTML = data["teams"].red1["team_number"];
        document.getElementById("red1_name").innerHTML = data["teams"].red1["team_name"];
        document.getElementById("red1_grade").innerHTML = data["teams"].red1["team_grade"].toUpperCase();
        document.getElementById("red1_organisation").innerHTML = data["teams"].red1["team_organisation"];
        document.getElementById("red1_city").innerHTML = data["teams"].red1["team_city"];
        document.getElementById("red1_matches_total").innerHTML = data["teams"].red1["matches_total"];
        document.getElementById("red1_wins_total").innerHTML = data["teams"].red1["wins_total"];
        document.getElementById("red1_wins_pct_total").innerHTML = data["teams"].red1["wins_pct_total"] + "%";
        document.getElementById("red1_matches_event").innerHTML = data["teams"].red1["matches_event"];
        document.getElementById("red1_wins_event").innerHTML = data["teams"].red1["wins_event"];
        document.getElementById("red1_wins_pct_event").innerHTML = data["teams"].red1["wins_pct_event"] + "%";
        document.getElementById("red1_points_total").innerHTML = data["teams"].red1["points_total"];
        document.getElementById("red1_points_avg_total").innerHTML = data["teams"].red1["points_avg_total"];
        document.getElementById("red1_points_event").innerHTML = data["teams"].red1["points_event"];
        document.getElementById("red1_points_avg_event").innerHTML = data["teams"].red1["points_avg_event"];
        document.getElementById("red1_hs_total_score").innerHTML = data["teams"].red1["team_hs_total"];
        document.getElementById("red1_hs_total_match").innerHTML = data["teams"].red1["team_hs_total_match"][0].toUpperCase();
        document.getElementById("red1_hs_total_event").innerHTML = data["teams"].red1["team_hs_total_match"][1];
        document.getElementById("red1_hs_event_score").innerHTML = data["teams"].red1["team_hs_event"];
        document.getElementById("red1_hs_event_match").innerHTML = data["teams"].red1["team_hs_event_match"].toUpperCase();
        awards = data["teams"].red1["awards"];
        award_list = document.getElementById("red1_awards");
        award_list.innerHTML = "<br>";
        awards_exc = 0;
        awards_tc = 0;
        awards_skills = 0;
        for (award of awards) {
            award_item = document.createElement("div");
            award_item.innerHTML = "<span class='award_title'>" + award[0] + "</span><span class='award_event'>" + award[1] + "</span>";
            award_list.appendChild(award_item);
            if (award[0] == "Excellence Award (VRC/VEXU/VAIRC)" || award[0] == "Excellence Award - High School (VRC/VAIRC)" || award[0] == "Excellence Award - Middle School (VRC/VAIRC)") {
                awards_exc += 1;
            } else if (award[0] == "Tournament Champions (VRC/VEXU/VAIRC)") {
                awards_tc += 1;
            } else if (award[0] == "Robot Skills Champion (VRC/VEXU/VAIRC)") {
                awards_skills += 1;
            }
        }
        document.getElementById("red1_awards_exc").innerHTML = awards_exc;
        document.getElementById("red1_awards_tc").innerHTML = awards_tc;
        document.getElementById("red1_awards_skills").innerHTML = awards_skills;

        document.getElementById("red2_number").innerHTML = data["teams"].red2["team_number"];
        document.getElementById("red2_name").innerHTML = data["teams"].red2["team_name"];
        document.getElementById("red2_grade").innerHTML = data["teams"].red2["team_grade"].toUpperCase();
        document.getElementById("red2_organisation").innerHTML = data["teams"].red2["team_organisation"];
        document.getElementById("red2_city").innerHTML = data["teams"].red2["team_city"];
        document.getElementById("red2_matches_total").innerHTML = data["teams"].red2["matches_total"];
        document.getElementById("red2_wins_total").innerHTML = data["teams"].red2["wins_total"];
        document.getElementById("red2_wins_pct_total").innerHTML = data["teams"].red2["wins_pct_total"] + "%";
        document.getElementById("red2_matches_event").innerHTML = data["teams"].red2["matches_event"];
        document.getElementById("red2_wins_event").innerHTML = data["teams"].red2["wins_event"];
        document.getElementById("red2_wins_pct_event").innerHTML = data["teams"].red2["wins_pct_event"] + "%";
        document.getElementById("red2_points_total").innerHTML = data["teams"].red2["points_total"];
        document.getElementById("red2_points_avg_total").innerHTML = data["teams"].red2["points_avg_total"];
        document.getElementById("red2_points_event").innerHTML = data["teams"].red2["points_event"];
        document.getElementById("red2_points_avg_event").innerHTML = data["teams"].red2["points_avg_event"];
        document.getElementById("red2_hs_total_score").innerHTML = data["teams"].red2["team_hs_total"];
        document.getElementById("red2_hs_total_match").innerHTML = data["teams"].red2["team_hs_total_match"][0].toUpperCase();
        document.getElementById("red2_hs_total_event").innerHTML = data["teams"].red2["team_hs_total_match"][1];
        document.getElementById("red2_hs_event_score").innerHTML = data["teams"].red2["team_hs_event"];
        document.getElementById("red2_hs_event_match").innerHTML = data["teams"].red2["team_hs_event_match"].toUpperCase();
        awards = data["teams"].red2["awards"];
        award_list = document.getElementById("red2_awards");
        award_list.innerHTML = "<br>";
        awards_exc = 0;
        awards_tc = 0;
        awards_skills = 0;
        for (award of awards) {
            award_item = document.createElement("div");
            award_item.innerHTML = "<span class='award_title'>" + award[0] + "</span><span class='award_event'>" + award[1] + "</span>";
            award_list.appendChild(award_item);
            if (award[0] == "Excellence Award (VRC/VEXU/VAIRC)" || award[0] == "Excellence Award - High School (VRC/VAIRC)" || award[0] == "Excellence Award - Middle School (VRC/VAIRC)") {
                awards_exc += 1;
            } else if (award[0] == "Tournament Champions (VRC/VEXU/VAIRC)") {
                awards_tc += 1;
            } else if (award[0] == "Robot Skills Champion (VRC/VEXU/VAIRC)") {
                awards_skills += 1;
            }
        }
        document.getElementById("red2_awards_exc").innerHTML = awards_exc;
        document.getElementById("red2_awards_tc").innerHTML = awards_tc;
        document.getElementById("red2_awards_skills").innerHTML = awards_skills;

        document.getElementById("blue1_number").innerHTML = data["teams"].blue1["team_number"];
        document.getElementById("blue1_name").innerHTML = data["teams"].blue1["team_name"];
        document.getElementById("blue1_grade").innerHTML = data["teams"].blue1["team_grade"].toUpperCase();
        document.getElementById("blue1_organisation").innerHTML = data["teams"].blue1["team_organisation"];
        document.getElementById("blue1_city").innerHTML = data["teams"].blue1["team_city"];
        document.getElementById("blue1_matches_total").innerHTML = data["teams"].blue1["matches_total"];
        document.getElementById("blue1_wins_total").innerHTML = data["teams"].blue1["wins_total"];
        document.getElementById("blue1_wins_pct_total").innerHTML = data["teams"].blue1["wins_pct_total"] + "%";
        document.getElementById("blue1_matches_event").innerHTML = data["teams"].blue1["matches_event"];
        document.getElementById("blue1_wins_event").innerHTML = data["teams"].blue1["wins_event"];
        document.getElementById("blue1_wins_pct_event").innerHTML = data["teams"].blue1["wins_pct_event"] + "%";
        document.getElementById("blue1_points_total").innerHTML = data["teams"].blue1["points_total"];
        document.getElementById("blue1_points_avg_total").innerHTML = data["teams"].blue1["points_avg_total"];
        document.getElementById("blue1_points_event").innerHTML = data["teams"].blue1["points_event"];
        document.getElementById("blue1_points_avg_event").innerHTML = data["teams"].blue1["points_avg_event"];
        document.getElementById("blue1_hs_total_score").innerHTML = data["teams"].blue1["team_hs_total"];
        document.getElementById("blue1_hs_total_match").innerHTML = data["teams"].blue1["team_hs_total_match"][0].toUpperCase();
        document.getElementById("blue1_hs_total_event").innerHTML = data["teams"].blue1["team_hs_total_match"][1];
        document.getElementById("blue1_hs_event_score").innerHTML = data["teams"].blue1["team_hs_event"];
        document.getElementById("blue1_hs_event_match").innerHTML = data["teams"].blue1["team_hs_event_match"].toUpperCase();
        awards = data["teams"].blue1["awards"];
        award_list = document.getElementById("blue1_awards");
        award_list.innerHTML = "<br>";
        awards_exc = 0;
        awards_tc = 0;
        awards_skills = 0;
        for (award of awards) {
            award_item = document.createElement("div");
            award_item.innerHTML = "<span class='award_title'>" + award[0] + "</span><span class='award_event'>" + award[1] + "</span>";
            award_list.appendChild(award_item);
            if (award[0] == "Excellence Award (VRC/VEXU/VAIRC)" || award[0] == "Excellence Award - High School (VRC/VAIRC)" || award[0] == "Excellence Award - Middle School (VRC/VAIRC)") {
                awards_exc += 1;
            } else if (award[0] == "Tournament Champions (VRC/VEXU/VAIRC)") {
                awards_tc += 1;
            } else if (award[0] == "Robot Skills Champion (VRC/VEXU/VAIRC)") {
                awards_skills += 1;
            }
        }
        document.getElementById("blue1_awards_exc").innerHTML = awards_exc;
        document.getElementById("blue1_awards_tc").innerHTML = awards_tc;
        document.getElementById("blue1_awards_skills").innerHTML = awards_skills;

        document.getElementById("blue2_number").innerHTML = data["teams"].blue2["team_number"];
        document.getElementById("blue2_name").innerHTML = data["teams"].blue2["team_name"];
        document.getElementById("blue2_grade").innerHTML = data["teams"].blue2["team_grade"].toUpperCase();
        document.getElementById("blue2_organisation").innerHTML = data["teams"].blue2["team_organisation"];
        document.getElementById("blue2_city").innerHTML = data["teams"].blue2["team_city"];
        document.getElementById("blue2_matches_total").innerHTML = data["teams"].blue2["matches_total"];
        document.getElementById("blue2_wins_total").innerHTML = data["teams"].blue2["wins_total"];
        document.getElementById("blue2_wins_pct_total").innerHTML = data["teams"].blue2["wins_pct_total"] + "%";
        document.getElementById("blue2_matches_event").innerHTML = data["teams"].blue2["matches_event"];
        document.getElementById("blue2_wins_event").innerHTML = data["teams"].blue2["wins_event"];
        document.getElementById("blue2_wins_pct_event").innerHTML = data["teams"].blue2["wins_pct_event"] + "%";
        document.getElementById("blue2_points_total").innerHTML = data["teams"].blue2["points_total"];
        document.getElementById("blue2_points_avg_total").innerHTML = data["teams"].blue2["points_avg_total"];
        document.getElementById("blue2_points_event").innerHTML = data["teams"].blue2["points_event"];
        document.getElementById("blue2_points_avg_event").innerHTML = data["teams"].blue2["points_avg_event"];
        document.getElementById("blue2_hs_total_score").innerHTML = data["teams"].blue2["team_hs_total"];
        document.getElementById("blue2_hs_total_match").innerHTML = data["teams"].blue2["team_hs_total_match"][0].toUpperCase();
        document.getElementById("blue2_hs_total_event").innerHTML = data["teams"].blue2["team_hs_total_match"][1];
        document.getElementById("blue2_hs_event_score").innerHTML = data["teams"].blue2["team_hs_event"];
        document.getElementById("blue2_hs_event_match").innerHTML = data["teams"].blue2["team_hs_event_match"].toUpperCase();
        awards = data["teams"].blue2["awards"];
        award_list = document.getElementById("blue2_awards");
        award_list.innerHTML = "<br>";
        awards_exc = 0;
        awards_tc = 0;
        awards_skills = 0;
        for (award of awards) {
            award_item = document.createElement("div");
            award_item.innerHTML = "<span class='award_title'>" + award[0] + "</span><span class='award_event'>" + award[1] + "</span>";
            award_list.appendChild(award_item);
            if (award[0] == "Excellence Award (VRC/VEXU/VAIRC)" || award[0] == "Excellence Award - High School (VRC/VAIRC)" || award[0] == "Excellence Award - Middle School (VRC/VAIRC)") {
                awards_exc += 1;
            } else if (award[0] == "Tournament Champions (VRC/VEXU/VAIRC)") {
                awards_tc += 1;
            } else if (award[0] == "Robot Skills Champion (VRC/VEXU/VAIRC)") {
                awards_skills += 1;
            }
        }
        document.getElementById("blue2_awards_exc").innerHTML = awards_exc;
        document.getElementById("blue2_awards_tc").innerHTML = awards_tc;
        document.getElementById("blue2_awards_skills").innerHTML = awards_skills;
    })
}

document.getElementById("refresh").addEventListener("click", function(){
    if (Number(document.getElementById("selected_event").value) == 0) {
        //target_event = 55261;
        target_event = 52066;
        //match_type = 180;
        match_type = 181;
    } else if (Number(document.getElementById("selected_event").value)) {
        target_event = 52213;
        match_type = 181;
    } else if (Number(document.getElementById("selected_event").value)) {
        target_event = 52215;
        match_type = 180;
    } else if (Number(document.getElementById("selected_event").value)) {
        target_event = 52216;
        match_type = 181;
    }
    target_div = Number(document.getElementById("selected_div").value);
    target_type = Number(document.getElementById("selected_type").value);
    target_inst = Number(document.getElementById("selected_inst").value);
    target_num = Number(document.getElementById("selected_num").value);
    endpoint = url_base + "match/" + target_event + "/" + target_div + "/" + target_type + "/" + target_inst + "/" + target_num;
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        if (match_type == 180) {
            fetch_match_iq(data[0][0], data[0][2]);
        } else {
            fetch_match_vrc(data[0][0], data[0][1], data[0][2], data[0][3], data[0][5], data[0][4]);
        }
    })
});

document.getElementById("manual_refresh").addEventListener("click", function(){
    if (Number(document.getElementById("selected_event").value) == 0) {
        target_event = 52066;
    } else if (Number(document.getElementById("selected_event").value)) {
        target_event = 52213;
    } else if (Number(document.getElementById("selected_event").value)) {
        target_event = 52215;
    } else if (Number(document.getElementById("selected_event").value)) {
        target_event = 52216;
    }
    manual1 = String(document.getElementById("manual1").value);
    manual2 = String(document.getElementById("manual2").value);
    manual3 = String(document.getElementById("manual3").value);
    manual4 = String(document.getElementById("manual4").value);
    if (manual2 == "" || manual4 == "") {
        manual2 = manual1;
        manual4 = manual3;
        endpoint = url_base + "teams/" + manual1 + "/" + manual2 + "/" + manual3 + "/" + manual4;
        fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            fetch_match_iq(data[1], data[3]);
        })
    } else {
        endpoint = url_base + "teams/" + manual1 + "/" + manual2 + "/" + manual3 + "/" + manual4;
        fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            fetch_match_vrc(data[1], data[2], data[3], data[4]);
        })
    }
});

document.getElementById("db_refresh").addEventListener("click", function(){
    if (Number(document.getElementById("selected_event").value) == 0) {
        target_event = 52066;
    } else if (Number(document.getElementById("selected_event").value)) {
        target_event = 52213;
    } else if (Number(document.getElementById("selected_event").value)) {
        target_event = 52215;
    } else if (Number(document.getElementById("selected_event").value)) {
        target_event = 52216;
    }
    endpoint = url_base + "refresh/events/id/" + target_event + "/matches";
    fetch(endpoint)
})
