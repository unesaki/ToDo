//それぞれの要素を取得する
const taskValue = document.getElementsByClassName('task_value')[0];
const taskSubmit = document.getElementsByClassName('task_submit')[0];
const taskList =document.getElementsByClassName('task_list')[0];

//追加ボタンを作成する
const addTasks = (task) => {
    //入力したタスクを追加・表示
    //createElementは要素を生成する。appedChildは親要素に対して子要素を追加する
    //これでHTMLの<ul>の子要素に<li>が追加された。↓①
    const listItem = document.createElement('li');
    const showItem = taskList.appendChild(listItem);
    //showItem.innerHTML = taskは入力したタスクを表示させる役割
    showItem.innerHTML = task;

    //タスクに削除ボタンを付与する
    //（１行目）ボタン要素を生成して、（２行目）ボタンのテキストをDeleteにする
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    //①の子要素として削除ボタンを追加
    //これで<li>の子要素に<button>が追加される
    listItem.appendChild(deleteButton);

    //削除ボタンを押すとイベント（削除）がスタート
    //削除ボタンを押すとdeleteTasks関数が呼び出されるようにする
    deleteButton.addEventListener('click', evt => {
        //↓によって意図していない、あらかじねついてあるイベントを中止させる
        evt.preventDefault();
        deleteTasks(deleteButton);
    });
};

//削除ボタンに機能をつけたい
const deleteTasks = (deleteButton) => {
    //closestは自身の要素と親要素の中から一致する要素を返す
    const chosenTask = deleteButton.closest('li');
    //removeClildは親要素から見た子要素を削除する
    taskList.removeChild(chosenTask);
};

//追加ボタンにイベントを付与する
//追加ボタンをクリックするとaddTask関数を呼び出す
taskSubmit.addEventListener('click', evt => {
    evt.preventDefault();
    const task = taskValue.value;
    addTasks(task);
    //↓タスクを入力するためのインプットの中を空にする役割
    taskValue.value = '';
});