const btn = document.querySelector('button');

function sendData( data ) {
  console.log( 'Sending data' );

  const XHR = new XMLHttpRequest();

  let urlEncodedData = "",
      urlEncodedDataPairs = [],
      name;

  // data オブジェクトを、URL エンコードしたキーと値のペアの配列に変換します
  for( name in data ) {
    urlEncodedDataPairs.push( encodeURIComponent( name ) + '=' + encodeURIComponent( data[name] ) );
  }

 // キーと値のペアをひとつの文字列に連結して、Web ブラウザーのフォーム送信方式に
 // 合うよう、エンコードされた空白をプラス記号に置き換えます。
  urlEncodedData = urlEncodedDataPairs.join( '&' ).replace( /%20/g, '+' );

  // データが正常に送信された場合に行うことを定義します
  XHR.addEventListener( 'load', function(event) {
    alert( 'Yeah! Data sent and response loaded.' );
  } );

  // エラーが発生した場合に行うことを定義します
  XHR.addEventListener( 'error', function(event) {
    alert( 'Oops! Something went wrong.' );
  } );

  // リクエストをセットアップします
  XHR.open( 'POST', 'https://example.com/cors.php' );

  // フォームデータの POST リクエストを扱うために必要な HTTP ヘッダを追加します
  XHR.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );

  // 最後に、データを送信します
  XHR.send( urlEncodedData );
}

btn.addEventListener( 'click', function() {
  sendData( {test:'ok'} );
} )