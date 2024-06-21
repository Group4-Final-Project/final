var mapContainer = document.getElementById('map'), // 지도를 표시할 div
          mapOption = {
              center: new kakao.maps.LatLng(37.48197780672043, 126.89576208605807), // 지도의 중심좌표
              level: 3 // 지도의 확대 레벨
          };

      var map = new kakao.maps.Map(mapContainer, mapOption);

      // 마커가 표시될 위치입니다
      var markerPosition  = new kakao.maps.LatLng(37.48211259302688, 126.89534922029664);

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
          position: markerPosition
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);

      // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      var iwContent = '<div style="padding:5px;">PetVIP! <br> <a href="https://map.kakao.com/link/to/PetVIP!,37.48211259302688,126.89534922029664" style="color:blue" target="_blank">길찾기</a></div>',
          iwPosition = new kakao.maps.LatLng(37.48211259302688, 126.89534922029664); //인포윈도우 표시 위치입니다

      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
          position : iwPosition,
          content : iwContent
      });

      // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
      infowindow.open(map, marker);

      var ctrlPressed = false;
      var cursorOnMap = false;

      function setZoomable(zoomable) {
          map.setZoomable(zoomable);
      }

      function handleWheel(event) {
          if (!ctrlPressed && cursorOnMap) {
              event.preventDefault();
              setZoomable(false);
          }
      }

      function handleKeydown(event) {
          if (event.ctrlKey) {
              ctrlPressed = true;
              setZoomable(true);
          }
      }

      function handleKeyup(event) {
          if (!event.ctrlKey) {
              ctrlPressed = false;
              setZoomable(false);
          }
      }

      mapContainer.addEventListener('mouseenter', function() {
          cursorOnMap = true;
          setZoomable(false);
      });

      mapContainer.addEventListener('mouseleave', function() {
          cursorOnMap = false;
          setZoomable(false);
      });

      document.addEventListener('wheel', handleWheel);
      document.addEventListener('keydown', handleKeydown);
      document.addEventListener('keyup', handleKeyup);