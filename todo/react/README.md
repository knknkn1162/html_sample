# README

## 考え方

+ UI = f(state)なので、
  + fという関数を作ろう -> `const [state, setStateFunc] = useState(initialState);`


## demo

```bash
npx create-react-app .
npm start
```

# ref 
+ useState: 関数コンポーネントでstateを管理（stateの保持と更新）するためのReactフック
+ useEffect: 関数の実行タイミングをReactのレンダリング後まで遅らせるhook
+ useContext: propsバケツリレーをしなくても下の階層で Contextに収容されているデータにアクセスできる
+ useReducer: (state, action) => newState という型のreducer を受け取り、現在のstateとdispatch関数の両方を返します。
+ useCallback: パフォーマンス向上のためのフックで、メモ化したコールバック関数を返します。
+ useMemo: useCallbackは関数自体をメモ化しますが、useMemoは関数の結果を保持します。
+ useRef: Classコンポーネント時のref属性の代わりに、useRefを使って要素への参照を行います。内部に保持している値だけを更新したい場合


```js
//const [状態変数, 状態を変更するための関数] = useState(状態の初期値);
const [count, setCount] = useState(initialState)

// 第二引数の変数に変化があったときだけ第一引数の関数(副作用)を実行する
useEffect(() => {
  /* 第1引数には実行させたい副作用関数を記述*/
  console.log('副作用関数が実行されました！')
},[依存する変数の配列]) // 第2引数には副作用関数の実行タイミングを制御する依存データを記述

const [state, dispatch] = useReducer(reducer,'初期値')
useCallback(callbackFunction, [deps]);
```
