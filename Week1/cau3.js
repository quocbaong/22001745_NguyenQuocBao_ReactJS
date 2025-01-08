// Dữ liệu 1
let dolphinsScore1 = 96;
let dolphinsScore2 = 108;
let dolphinsScore3 = 89;

let koalasScore1 = 88;
let koalasScore2 = 91;
let koalasScore3 = 110;

// Tính trung bình
let dolphinsAvg1 = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
let koalasAvg1 = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

console.log("Dữ liệu 1:");
if (dolphinsAvg1 >= 100 || koalasAvg1 >= 100) {
    if (dolphinsAvg1 > koalasAvg1 && dolphinsAvg1 >= 100) {
        console.log(`Dolphins thắng với điểm trung bình là ${dolphinsAvg1.toFixed(2)}!`);
    } else if (koalasAvg1 > dolphinsAvg1 && koalasAvg1 >= 100) {
        console.log(`Koalas thắng với điểm trung bình là ${koalasAvg1.toFixed(2)}!`);
    } else if (dolphinsAvg1 === koalasAvg1 && dolphinsAvg1 >= 100 && koalasAvg1 >= 100) {
        console.log(`Hòa! Cả hai đội đều có điểm trung bình là ${dolphinsAvg1.toFixed(2)}.`);
    } else {
        console.log(`Không đội nào chiến thắng vì điểm thấp hơn 100.`);
    }
} else {
    console.log(`Không đội nào chiến thắng vì không có đội nào đạt yêu cầu tối thiểu 100.`);
}

// Bonus 1
let dolphinsScoreBonus1_1 = 97;
let dolphinsScoreBonus1_2 = 112;
let dolphinsScoreBonus1_3 = 101;

let koalasScoreBonus1_1 = 109;
let koalasScoreBonus1_2 = 95;
let koalasScoreBonus1_3 = 123;

// Tính trung bình
let dolphinsAvgBonus1 = (dolphinsScoreBonus1_1 + dolphinsScoreBonus1_2 + dolphinsScoreBonus1_3) / 3;
let koalasAvgBonus1 = (koalasScoreBonus1_1 + koalasScoreBonus1_2 + koalasScoreBonus1_3) / 3;

console.log("Bonus 1:");
if (dolphinsAvgBonus1 >= 100 || koalasAvgBonus1 >= 100) {
    if (dolphinsAvgBonus1 > koalasAvgBonus1 && dolphinsAvgBonus1 >= 100) {
        console.log(`Dolphins thắng với điểm trung bình là ${dolphinsAvgBonus1.toFixed(2)}!`);
    } else if (koalasAvgBonus1 > dolphinsAvgBonus1 && koalasAvgBonus1 >= 100) {
        console.log(`Koalas thắng với điểm trung bình là ${koalasAvgBonus1.toFixed(2)}!`);
    } else if (dolphinsAvgBonus1 === koalasAvgBonus1 && dolphinsAvgBonus1 >= 100 && koalasAvgBonus1 >= 100) {
        console.log(`Hòa! Cả hai đội đều có điểm trung bình là ${dolphinsAvgBonus1.toFixed(2)}.`);
    } else {
        console.log(`Không đội nào chiến thắng vì điểm thấp hơn 100.`);
    }
} else {
    console.log(`Không đội nào chiến thắng vì không có đội nào đạt yêu cầu tối thiểu 100.`);
}

// Bonus 2
let dolphinsScoreBonus2_1 = 97;
let dolphinsScoreBonus2_2 = 112;
let dolphinsScoreBonus2_3 = 101;

let koalasScoreBonus2_1 = 109;
let koalasScoreBonus2_2 = 95;
let koalasScoreBonus2_3 = 106;

// Tính trung bình
let dolphinsAvgBonus2 = (dolphinsScoreBonus2_1 + dolphinsScoreBonus2_2 + dolphinsScoreBonus2_3) / 3;
let koalasAvgBonus2 = (koalasScoreBonus2_1 + koalasScoreBonus2_2 + koalasScoreBonus2_3) / 3;

console.log("Bonus 2:");
if (dolphinsAvgBonus2 >= 100 || koalasAvgBonus2 >= 100) {if (dolphinsAvgBonus2 > koalasAvgBonus2 && dolphinsAvgBonus2 >= 100) {
    console.log(`Dolphins thắng với điểm trung bình là ${dolphinsAvgBonus2.toFixed(2)}!`);
} else if (koalasAvgBonus2 > dolphinsAvgBonus2 && koalasAvgBonus2 >= 100) {
    console.log(`Koalas thắng với điểm trung bình là ${koalasAvgBonus2.toFixed(2)}!`);
} else if (dolphinsAvgBonus2 === koalasAvgBonus2 && dolphinsAvgBonus2 >= 100 && koalasAvgBonus2 >= 100) {
    console.log(`Hòa! Cả hai đội đều có điểm trung bình là ${dolphinsAvgBonus2.toFixed(2)}.`);
} else {
    console.log(`Không đội nào chiến thắng vì điểm thấp hơn 100.`);
}
} else {
console.log(`Không đội nào chiến thắng vì không có đội nào đạt yêu cầu tối thiểu 100.`);
}