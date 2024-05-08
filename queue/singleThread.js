// 1834. Single-Threaded CPU
// Medium
// Topics
// Companies
// Hint
// You are given n​​​​​​ tasks labeled from 0 to n - 1 represented by a 2D integer array tasks, where tasks[i] = [enqueueTimei, processingTimei] means that the i​​​​​​th​​​​ task will be available to process at enqueueTimei and will take processingTimei to finish processing.

// You have a single-threaded CPU that can process at most one task at a time and will act in the following way:

// If the CPU is idle and there are no available tasks to process, the CPU remains idle.
// If the CPU is idle and there are available tasks, the CPU will choose the one with the shortest processing time. If multiple tasks have the same shortest processing time, it will choose the task with the smallest index.
// Once a task is started, the CPU will process the entire task without stopping.
// The CPU can finish a task then start a new one instantly.
// Return the order in which the CPU will process the tasks.

// Example 1:

// Input: tasks = [[1,2],[2,4],[3,2],[4,1]]
// Output: [0,2,3,1]
// Explanation: The events go as follows:
// - At time = 1, task 0 is available to process. Available tasks = {0}.
// - Also at time = 1, the idle CPU starts processing task 0. Available tasks = {}.
// - At time = 2, task 1 is available to process. Available tasks = {1}.
// - At time = 3, task 2 is available to process. Available tasks = {1, 2}.
// - Also at time = 3, the CPU finishes task 0 and starts processing task 2 as it is the shortest. Available tasks = {1}.
// - At time = 4, task 3 is available to process. Available tasks = {1, 3}.
// - At time = 5, the CPU finishes task 2 and starts processing task 3 as it is the shortest. Available tasks = {1}.
// - At time = 6, the CPU finishes task 3 and starts processing task 1. Available tasks = {}.
// - At time = 10, the CPU finishes task 1 and becomes idle.
// Example 2:

// Input: tasks = [[7,10],[7,12],[7,5],[7,4],[7,2]]
// Output: [4,3,2,0,1]
// Explanation: The events go as follows:
// - At time = 7, all the tasks become available. Available tasks = {0,1,2,3,4}.
// - Also at time = 7, the idle CPU starts processing task 4. Available tasks = {0,1,2,3}.
// - At time = 9, the CPU finishes task 4 and starts processing task 3. Available tasks = {0,1,2}.
// - At time = 13, the CPU finishes task 3 and starts processing task 2. Available tasks = {0,1}.
// - At time = 18, the CPU finishes task 2 and starts processing task 0. Available tasks = {1}.
// - At time = 28, the CPU finishes task 0 and starts processing task 1. Available tasks = {}.
// - At time = 40, the CPU finishes task 1 and becomes idle.

/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function (tasks) {
  let time = 0;

  let timeAction = null;

  let queue = [];

  let result = [];

  let obj = {};

  lastElement = 0;

  while (result.length < tasks.length) {
    // console.log("\nt: ", time);
    let temp = 0;
    while (temp < tasks.length) {
      if (tasks[temp][0] <= timeAction && !obj[temp]) {
        queue.push(temp);

        // console.log("add to queue ", time, queue);

        obj[temp] = true;
      }

      temp++;
    }


    if ((!timeAction || time === timeAction) && queue.length) {
      //   console.log("\n =====start timeAction: ", time, queue);

      let maxTime = 1000000000000;
      let indexAction = 0;

      //find the shortest process time in queue tasks
      for (let index in queue) {
        if (
          tasks[queue[index]][1] < maxTime ||
          (tasks[queue[index]][1] === maxTime && indexAction !== -1)
        ) {
          //   console.log("choose: ", index, queue[+index], queue[indexAction]);

          if (tasks[queue[index]][1] === maxTime) {
            indexAction =
              queue[+index] < queue[indexAction] ? +index : indexAction;
          } else {
            indexAction = +index;
          }

          maxTime = tasks[queue[index]][1];
        }
      }

      //   console.log("indexAction: ", indexAction, queue);

      if (queue.length) {
        const processTime = tasks[queue[indexAction]][1];
        timeAction = time + processTime;

        result.push(queue[indexAction]);

        queue = queue.filter((_, i) => i !== indexAction);
      }

      //   console.log("timeAction: ", time, timeAction, queue, result);
    }

    time++;
  }

  return result;
};

// console.log(
//   getOrder([
//     [1, 2],
//     [2, 4],
//     [3, 2],
//     [4, 1],
//   ])
// );

// console.log(getOrder([
//   [7, 10],
//   [7, 12],
//   [7, 5],
//   [7, 4],
//   [7, 2],
// ]))

console.log(
  getOrder([
    [19, 13], //0
    [16, 9], //1
    [21, 10], //2
    [32, 25], //3
    [37, 4], //4
    [49, 24], //5
    [2, 15], //6
    [38, 41], //7
    [37, 34], //8
    [33, 6], //9
    [45, 4], //10
    [18, 18], //11
    [46, 39], //12
    [12, 24], //13
  ])
);

console.log(
  getOrder([
    [485, 151],
    [433, 516],
    [762, 645],
    [43, 846],
    [933, 266],
    [173, 204],
    [958, 4],
    [189, 604],
    [21, 661],
    [13, 124],
    [611, 364],
    [934, 927],
    [203, 262],
    [212, 873],
    [148, 907],
    [791, 815],
    [9, 12],
    [8, 730],
    [603, 358],
    [809, 500],
    [942, 101],
    [27, 328],
    [148, 666],
    [85, 947],
    [895, 87],
    [83, 64],
    [139, 149],
    [796, 877],
    [447, 621],
    [267, 676],
    [86, 433],
    [719, 559],
    [109, 363],
    [161, 405],
    [374, 933],
    [482, 172],
    [354, 749],
    [549, 889],
    [698, 272],
    [598, 998],
    [56, 131],
    [34, 165],
    [50, 953],
    [244, 816],
    [961, 572],
    [414, 855],
    [63, 327],
    [533, 442],
    [231, 784],
    [654, 672],
    [576, 826],
    [293, 69],
    [496, 652],
    [529, 935],
    [938, 110],
    [831, 656],
    [9, 153],
    [399, 473],
    [556, 351],
    [333, 299],
    [27, 723],
    [480, 972],
    [584, 391],
    [932, 206],
    [247, 696],
    [609, 798],
    [222, 861],
    [381, 14],
    [535, 160],
    [193, 717],
    [328, 759],
    [9, 222],
    [75, 445],
    [162, 736],
    [526, 155],
    [767, 346],
    [297, 775],
    [580, 89],
    [845, 353],
    [621, 782],
    [550, 557],
    [672, 26],
    [336, 412],
    [466, 646],
    [891, 62],
    [35, 935],
    [425, 923],
    [591, 263],
    [596, 332],
    [445, 75],
    [861, 740],
    [576, 295],
    [264, 425],
    [343, 732],
    [377, 366],
    [647, 121],
    [692, 691],
    [482, 583],
    [115, 309],
    [46, 710],
    [502, 871],
    [512, 351],
    [890, 841],
    [558, 968],
    [684, 56],
    [844, 618],
    [229, 546],
    [954, 847],
    [894, 55],
    [212, 964],
    [395, 140],
    [47, 145],
    [637, 363],
    [745, 794],
    [595, 643],
    [234, 599],
    [147, 468],
    [360, 694],
    [455, 835],
    [264, 945],
    [208, 110],
    [903, 842],
    [279, 705],
    [13, 18],
    [879, 38],
    [807, 289],
    [490, 848],
    [852, 371],
    [592, 345],
    [132, 233],
    [784, 206],
    [194, 206],
    [203, 244],
    [645, 953],
    [220, 759],
    [440, 593],
    [419, 864],
    [722, 236],
    [639, 115],
    [878, 536],
    [757, 799],
    [45, 200],
    [611, 993],
    [743, 186],
    [15, 826],
    [662, 447],
    [189, 202],
    [575, 219],
    [30, 997],
    [680, 604],
    [864, 21],
    [138, 961],
    [485, 432],
    [803, 968],
    [275, 871],
    [198, 171],
    [758, 689],
    [562, 608],
    [901, 620],
    [438, 652],
    [430, 337],
    [849, 362],
    [561, 248],
    [429, 313],
    [619, 238],
    [594, 147],
    [441, 595],
    [198, 169],
    [245, 50],
    [570, 631],
    [978, 947],
    [477, 918],
    [730, 133],
    [890, 456],
    [83, 583],
    [79, 565],
    [759, 279],
    [670, 727],
    [884, 407],
    [438, 159],
    [254, 957],
    [68, 509],
    [905, 440],
    [383, 641],
    [665, 596],
    [46, 748],
    [727, 261],
    [594, 354],
    [533, 12],
    [842, 687],
    [194, 376],
    [943, 373],
    [438, 625],
    [874, 246],
    [128, 687],
    [231, 593],
    [684, 401],
    [886, 38],
    [84, 621],
    [122, 717],
    [2, 992],
    [566, 529],
    [404, 569],
    [782, 717],
    [535, 657],
    [265, 936],
    [351, 264],
    [183, 459],
    [339, 663],
    [454, 825],
    [241, 832],
    [215, 201],
    [323, 883],
    [120, 349],
    [737, 653],
    [194, 189],
    [754, 939],
    [432, 173],
    [269, 710],
    [176, 796],
    [799, 421],
    [575, 824],
    [919, 598],
    [124, 361],
    [283, 816],
    [306, 882],
    [666, 251],
    [630, 619],
    [789, 628],
    [200, 307],
    [516, 992],
    [358, 1],
    [523, 249],
    [410, 754],
    [622, 182],
    [655, 180],
    [767, 171],
    [650, 455],
    [452, 83],
    [250, 615],
    [558, 620],
    [244, 416],
    [78, 281],
    [690, 282],
    [696, 989],
    [42, 376],
    [407, 365],
    [590, 327],
    [436, 821],
    [708, 646],
    [271, 556],
    [48, 183],
    [411, 915],
    [474, 246],
    [740, 700],
    [570, 805],
    [939, 109],
    [840, 495],
    [690, 914],
    [286, 156],
    [362, 210],
    [980, 431],
    [46, 194],
    [804, 602],
    [548, 805],
    [19, 376],
    [992, 345],
    [862, 688],
    [870, 247],
    [287, 109],
    [483, 949],
    [333, 48],
    [580, 98],
    [628, 373],
    [615, 570],
    [220, 92],
    [100, 199],
    [637, 25],
    [815, 390],
    [324, 46],
    [961, 185],
    [195, 502],
    [219, 427],
    [875, 510],
    [355, 560],
    [62, 614],
    [872, 880],
    [788, 600],
    [190, 368],
    [881, 876],
    [127, 24],
    [620, 718],
    [8, 917],
    [755, 202],
    [170, 114],
    [681, 418],
    [11, 406],
    [574, 225],
    [156, 735],
    [106, 23],
    [236, 796],
    [942, 530],
    [849, 536],
    [185, 863],
    [387, 408],
    [612, 241],
    [413, 949],
    [779, 949],
    [333, 167],
    [540, 259],
    [107, 63],
    [316, 932],
    [72, 1000],
    [438, 352],
    [605, 112],
    [54, 958],
    [492, 635],
    [249, 676],
    [820, 622],
    [214, 274],
    [783, 266],
    [335, 610],
    [275, 597],
    [226, 808],
    [772, 948],
    [407, 430],
    [217, 328],
    [240, 861],
    [475, 701],
    [847, 819],
    [564, 685],
    [182, 833],
    [713, 923],
    [986, 461],
    [766, 431],
    [709, 76],
    [936, 352],
    [641, 540],
    [978, 684],
    [94, 466],
    [266, 925],
    [863, 353],
    [310, 704],
    [480, 689],
    [206, 846],
    [628, 98],
    [421, 452],
    [732, 874],
    [946, 215],
    [127, 911],
    [108, 157],
    [475, 970],
    [32, 439],
    [337, 474],
    [490, 996],
    [295, 921],
    [214, 453],
    [522, 16],
    [247, 233],
    [327, 253],
    [81, 841],
    [170, 32],
    [960, 194],
    [363, 374],
    [571, 235],
    [675, 14],
    [668, 284],
    [799, 380],
    [559, 321],
    [193, 517],
    [861, 236],
    [402, 429],
    [935, 627],
    [344, 848],
    [903, 87],
    [862, 332],
    [92, 687],
    [918, 576],
    [561, 727],
    [714, 540],
    [795, 872],
    [421, 348],
    [262, 257],
    [366, 788],
    [665, 156],
    [704, 313],
    [822, 418],
    [268, 515],
    [539, 204],
    [976, 250],
    [241, 428],
    [671, 791],
    [651, 865],
    [73, 833],
    [90, 812],
    [504, 808],
    [165, 685],
    [26, 902],
    [875, 587],
    [559, 613],
    [266, 905],
    [881, 993],
    [252, 388],
    [501, 441],
    [387, 532],
    [49, 382],
    [881, 625],
    [35, 18],
    [847, 765],
    [849, 881],
    [559, 829],
    [994, 86],
    [229, 347],
    [405, 284],
    [281, 307],
    [518, 835],
    [224, 440],
    [430, 475],
    [148, 127],
    [549, 67],
    [233, 928],
    [217, 538],
    [638, 545],
    [591, 506],
    [515, 1000],
    [360, 645],
    [519, 699],
    [628, 728],
    [420, 195],
    [178, 518],
    [518, 303],
    [1, 1],
    [579, 742],
    [655, 275],
    [641, 583],
    [464, 475],
    [515, 375],
    [189, 157],
    [695, 163],
    [728, 731],
    [5, 320],
    [883, 92],
    [241, 806],
    [124, 912],
    [65, 875],
    [992, 494],
    [992, 724],
    [539, 318],
    [621, 765],
    [119, 670],
    [651, 764],
    [819, 842],
    [325, 564],
    [736, 900],
    [636, 497],
    [677, 427],
    [204, 79],
    [316, 608],
    [60, 887],
    [888, 270],
    [543, 108],
    [905, 765],
    [134, 363],
    [394, 45],
    [134, 257],
    [243, 106],
    [186, 472],
    [771, 16],
    [433, 235],
    [983, 306],
    [164, 675],
    [123, 670],
    [133, 8],
    [854, 657],
    [908, 639],
    [485, 288],
    [898, 78],
    [547, 264],
    [717, 662],
    [502, 138],
    [472, 57],
    [701, 225],
    [931, 325],
    [430, 863],
    [715, 485],
    [600, 561],
    [189, 909],
    [53, 212],
    [906, 504],
    [769, 882],
    [330, 499],
    [479, 696],
    [771, 409],
    [797, 359],
    [54, 219],
    [966, 316],
    [908, 859],
    [728, 655],
    [737, 938],
    [236, 642],
    [563, 553],
    [706, 153],
    [601, 657],
    [643, 517],
    [920, 246],
    [628, 705],
    [641, 880],
    [894, 879],
    [795, 947],
    [467, 916],
    [540, 974],
    [193, 63],
    [616, 286],
    [540, 279],
    [654, 904],
    [738, 51],
    [493, 923],
    [97, 422],
    [614, 948],
    [716, 798],
    [581, 405],
    [330, 898],
    [546, 985],
    [43, 342],
    [663, 330],
    [576, 355],
    [238, 709],
    [722, 663],
    [454, 424],
    [751, 286],
    [813, 177],
    [661, 765],
    [648, 922],
    [439, 976],
    [415, 386],
    [339, 555],
    [980, 43],
    [859, 156],
    [221, 139],
    [926, 485],
    [631, 749],
    [309, 703],
    [311, 652],
    [820, 224],
    [473, 720],
    [29, 553],
    [28, 706],
    [875, 717],
    [822, 918],
    [606, 529],
    [556, 310],
    [343, 363],
    [914, 25],
    [498, 72],
    [278, 816],
    [698, 920],
    [17, 146],
    [894, 622],
    [514, 229],
    [796, 435],
    [178, 912],
    [845, 812],
    [33, 597],
    [251, 21],
    [992, 56],
    [149, 543],
    [941, 956],
    [935, 514],
    [219, 1000],
    [707, 964],
    [838, 786],
    [875, 509],
    [598, 191],
    [944, 943],
    [678, 232],
    [582, 708],
    [810, 619],
    [205, 799],
    [528, 309],
    [310, 843],
    [989, 254],
    [712, 168],
    [401, 818],
    [323, 171],
    [940, 963],
    [336, 122],
    [162, 259],
    [504, 355],
    [851, 341],
    [474, 777],
    [210, 700],
    [71, 60],
    [774, 254],
    [733, 712],
    [238, 560],
    [262, 990],
    [5, 236],
    [737, 864],
    [688, 500],
    [701, 235],
    [220, 160],
    [464, 979],
    [669, 473],
    [693, 744],
    [551, 730],
    [780, 921],
    [417, 240],
    [737, 626],
    [410, 492],
    [470, 546],
    [366, 623],
    [338, 74],
    [519, 125],
    [643, 574],
    [547, 889],
    [568, 906],
    [242, 912],
    [950, 562],
    [859, 429],
    [599, 621],
    [532, 797],
    [742, 474],
    [902, 195],
    [805, 708],
    [320, 398],
    [373, 365],
    [461, 565],
    [931, 837],
    [257, 186],
    [652, 706],
    [437, 249],
    [637, 984],
    [959, 394],
    [77, 242],
    [687, 648],
    [226, 83],
    [969, 770],
    [466, 901],
    [62, 350],
    [335, 708],
    [949, 743],
    [519, 628],
    [382, 213],
    [912, 111],
    [649, 969],
    [134, 332],
    [952, 89],
    [831, 714],
    [735, 121],
    [221, 657],
    [3, 251],
    [933, 921],
    [197, 900],
    [298, 469],
    [45, 161],
    [294, 615],
    [849, 683],
    [273, 242],
    [661, 367],
    [320, 927],
    [88, 491],
    [110, 74],
    [963, 245],
    [94, 980],
    [371, 880],
    [578, 331],
    [842, 528],
    [104, 972],
    [291, 206],
    [550, 988],
    [678, 47],
    [912, 779],
    [671, 416],
    [557, 281],
    [461, 652],
    [312, 679],
    [395, 567],
    [580, 478],
    [866, 577],
    [767, 854],
    [485, 631],
    [107, 839],
    [614, 906],
    [330, 654],
    [22, 623],
    [280, 102],
    [178, 643],
    [682, 52],
    [657, 360],
    [213, 173],
    [93, 500],
    [547, 218],
    [864, 713],
    [639, 125],
    [821, 787],
    [7, 997],
    [818, 252],
    [80, 94],
    [902, 407],
    [695, 725],
    [658, 816],
    [273, 476],
    [828, 882],
    [849, 239],
    [766, 392],
    [31, 192],
    [356, 201],
    [968, 653],
    [716, 991],
    [687, 186],
    [215, 738],
    [363, 91],
    [660, 980],
    [931, 221],
    [3, 356],
    [967, 954],
    [78, 94],
    [925, 26],
    [3, 144],
    [808, 868],
    [297, 832],
    [635, 358],
    [277, 123],
    [5, 218],
    [400, 978],
    [141, 207],
    [481, 361],
    [555, 409],
    [861, 856],
    [714, 911],
    [578, 266],
    [822, 356],
    [663, 195],
    [750, 136],
    [536, 808],
    [310, 748],
    [885, 890],
    [771, 45],
    [303, 210],
    [236, 478],
    [598, 929],
    [206, 741],
    [689, 653],
    [927, 664],
    [90, 872],
    [593, 338],
    [172, 73],
    [632, 369],
    [193, 944],
    [80, 467],
    [327, 166],
    [621, 437],
    [494, 251],
    [281, 351],
    [318, 581],
    [158, 70],
    [258, 710],
    [103, 238],
    [508, 864],
    [315, 513],
    [391, 900],
    [64, 815],
    [666, 160],
    [62, 216],
    [693, 201],
    [92, 676],
    [452, 93],
    [612, 928],
    [566, 781],
    [18, 119],
    [682, 165],
    [87, 24],
    [154, 944],
    [516, 555],
    [102, 570],
    [663, 84],
    [667, 827],
    [330, 998],
    [789, 410],
    [286, 58],
    [584, 360],
    [786, 175],
    [901, 409],
    [265, 675],
    [606, 422],
    [925, 30],
    [878, 251],
    [298, 51],
    [732, 90],
    [178, 330],
    [685, 509],
    [13, 225],
    [467, 119],
    [973, 472],
    [434, 68],
    [715, 588],
    [387, 747],
  ])
);