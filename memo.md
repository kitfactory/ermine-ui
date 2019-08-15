### Angular 名前
ng g component似続けてキャメルケース(CamelCase)を入力しても自動的にケバブケース(kebab-case)に変換される。

### Angular サービスの作成

雛形作成

```
ng g service hogeHoge

```

## @Injection

## app.module.tsのproviders登録

## component.tsにて
- importに追加
- constructor引数に追加




### RoCコンポーネント

* イベントでファイルを受け取り、
　受け取ったファイルをRoC等に描く。

### データセット
* トレーニング・データセット
* トレーニング個数
* バリデーション・データセット
* バリデーション個数
* チャンネル

### データフィルタ
* データフィルタ条件
* 画像切り取り
* 画像リサイズ

### 拡張
* 拡張オプション
* 回転
* コントラスト
* 

### モデル
* 

### 学習条件
* 学習率
* 最適化パラメータ


### 試行nable
* モジュールの値
* 


### 評価

-評価-
    評価設定ファイル

-


### 学習

-データセット-

-名前(Sequence)-
    -(設定ファイル)-
        -(Trial)-
            -学習モデル-
            -設定ログ-
        -学習状態-中断-


-学習履歴-
    -本履歴を削除
        -ディレクトリ以下を削除
        -


- ImageClassification


SQLAlchemy


```
from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    fullname = Column(String(255))
    password = Column(String(255))


engine = create_engine("mysql+pymysql://<user>:<pass>@<host>/<dbname>?charset=utf8")
Base.metadata.create_all(bind=engine)


```
----------------
* Ermine 
---------------
評価:
------------------
評価:xxxxxx
--------------------
| 評価1
| タイプ：画像分類
| データセット
| 評価設定:xxxx
| 判定結果：xxdd
--------------------
|
|    + 評価を実施
| 
--------------------

途中のアイテム

```
-- 学習の途中とか。
--

```



-------------------


| Confusion Matrix


    - リレーションシップ

子属性 = relationship("子テーブル")

```
from sqlalchemy import Table, Column, Integer, ForeignKey, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
 
# DB接続
engine = create_engine('sqlite:///:memory:')
 
Base = declarative_base()
 
 
class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    age = Column(Integer)
 
    posts = relationship("Post", backref="users")    # Postとのリレーション
 
 
class Post(Base):
    __tablename__ = 'posts'
    id = Column(Integer, primary_key=True)
    users_id = Column(Integer, ForeignKey('users.id'))
    title = Column(String)
    body = Column(Integer)
 
    user = relationship("User")    # Userとのリレーション
 
# テーブルクラスのテーブルを生成
Base.metadata.create_all(engine)
 
# セッション生成
Session = sessionmaker(bind=engine)
session = Session()
 
# サンプルデータ挿入
session.add(User(id=1, name="Suzuki", age=19))
session.add(User(id=2, name="Tanaka", age=21))
session.add(User(id=3, name="Sato", age=21))
 
session.add(Post(users_id=1, title="朝の体操", body="ラジオ体操で元気いっぱい"))
session.add(Post(users_id=1, title="今日の夕食", body="カレーラスがとても美味しかった。"))
session.add(Post(users_id=2, title="仕事", body="今日はDjangoでAPI作成。"))
session.add(Post(users_id=2, title="Python楽しい", body="Python楽しいですよね！！"))
session.commit()
 
# inner joinのサンプル
users = session.query(User).join(Post, User.id == Post.users_id).all()
 
for user in users:
    print("%sさんの投稿" % (user.name))
    for post in user.posts:
        print("|- タイトル：%s" % (post.title,))
    print('')



```




__学習DB__
|ID|名前|カテゴリ|
| | | |


### CSVパース
// オプションに{columns:true}をつけると、1行目をプロパティ名にしたオブジェクトの配列が返るcsv.parse(data, { columns: true }, (err, output: Array<Object>) => {



### Plotly Confusion Matrix

trace1 = {
  x: ['lying', 'sitting', 'standing', 'people', 'backgroun'], 
  y: ['lying', 'sitting', 'standing', 'people', 'backgroun'], 
  z: [[758, 163, 0, 0, 23], [63, 858, 3, 0, 0], [0, 50, 188, 21, 35], [0, 22, 8, 40, 4], [12, 91, 26, 29, 368]], 
  type: 'heatmap'
};
data = [trace1];
layout = {
  annotations: [
    {
      x: 'lying', 
      y: 'lying', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '758', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'sitting', 
      y: 'lying', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '163', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'standing', 
      y: 'lying', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '0', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'people', 
      y: 'lying', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '0', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'backgroun', 
      y: 'lying', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '23', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'lying', 
      y: 'sitting', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '63', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'sitting', 
      y: 'sitting', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '858', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'standing', 
      y: 'sitting', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '3', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'people', 
      y: 'sitting', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '0', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'backgroun', 
      y: 'sitting', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '0', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'lying', 
      y: 'standing', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '0', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'sitting', 
      y: 'standing', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '50', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'standing', 
      y: 'standing', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '188', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'people', 
      y: 'standing', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '21', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'backgroun', 
      y: 'standing', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '35', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'lying', 
      y: 'people', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '0', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'sitting', 
      y: 'people', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '22', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'standing', 
      y: 'people', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '8', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'people', 
      y: 'people', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '40', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'backgroun', 
      y: 'people', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '4', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'lying', 
      y: 'backgroun', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '12', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'sitting', 
      y: 'backgroun', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '91', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'standing', 
      y: 'backgroun', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '26', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'people', 
      y: 'backgroun', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '29', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'backgroun', 
      y: 'backgroun', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '368', 
      xref: 'x1', 
      yref: 'y1'
    }
  ], 
  title: 'Confusion Matrix', 
  xaxis: {title: 'Predicted value'}, 
  yaxis: {title: 'Real value'}
};
Plotly.plot('plotly-div', {
  data: data,
  layout: layout
});