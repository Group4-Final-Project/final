// idx 쿼리 파라미터에 따라 [제공서비스]와[준비물] 입력
function onLoadFunction() {
    const idx = getQueryParam('idx');
    const idxText = document.getElementById('idx-text');

    function setInnerHTML(html) {
        idxText.innerHTML = html;
    }

    if (idx === '1') {
        setInnerHTML(`
        <h3 style="margin: 0px 0px 3px; padding: 0px; font-weight: 600; font-size: 15px;">
        [서비스이용전 주의사항]
        </h3>
        <div class="notandum-p-text">
        <p>
            <strong>
            <span style="font-size: 16px;">
                ※ <span style="color: blue;">미용차가 아닙니다</span>.
            </span>
                매니저가 미용용품을 구비하여 보호자님 댁에 방문하여 서비스하는 상품입니다.
            </strong>
        </p>
        <br>
        <p>
            <span style="font-size: 16px;">
                <strong>
                    ※ 신청하신 미용스타일에 맞춰 스케줄관리를 하기때문에 미용스타일변경이 필요하실경우, 사전에 꼭 말씀주셔야 합니다.
                </strong>
                <strong style="color: blue;">
                    현장에서 스타일변경을 원하실경우, 다음타임 스케줄로 인해 변경이 불가할 수 있습니다.
                </strong>
            </span>
        </p>
        <br>
        <p>
            <span style="font-size: 16px;">
                <strong>※  기본 전체 미용은<u>3mm로 몸, 얼굴, 다리 전부 클리핑으로 미용합니다.</u></strong>
            </span>
        </p>
        <br>
        <p>
            <span style="font-size: 16px;">
                <strong style="color: blue;">
                    ※  스포팅과 전체 가위컷의 경우 추가 비용이 발생되며, 개인결제창 보내드립니다. 진행을 원하시면 톡상담 및 고객센터로 문의하여 주시기 바랍니다.
                </strong>
            </span>
        </p>
        <br>
        <p>
            <span style="font-size: 16px;">
                <strong>
                    ※ 반려동물의 성향(입질), 사회성, 분리불안, 컨디션, 스트레스 등에 따라 서비스가 중단될 수 있습니다.
                </strong>
            </span>
        </p>
        <br>
        <p>
            <span style="font-size: 16px;">
                <strong>
                    ※ 털 엉킴이 심하거나 피부 상태가 좋지 않을 경우 서비스 진행이 어렵거나, 추가요금이 발생할 수 있습니다.
                </strong>
            </span>
        </p>
        <br>
        <p>
            <span style="font-size: 16px;">
                <strong>
                    ※  당일 예약은 불가하며 <u style="color: red;">신청일 기준 최소 2~3일 전에 예약하시길 바랍니다.</u>
                </strong>
            </span>
        </p>
        <p>
            <span style="font-size: 16px;">
                <strong>
                    ※ 주문 시, '추가 요청사항'에 요청 사항을 상세하게 적어주시면, 원활한 상담이 가능합니다.
                </strong>
            </span>
        </p>
        <p>
            <span style="font-size: 16px;">
                <strong>
                    ※ *배넷 목욕, 미용 등은 5차 접종이 끝난 후 일주일이 지난 시점에 예약 주시길 권해드립니다.
                    (12개월 이내의 아이일 경우, 추가 요청 사항에 "접종 후 일주일 지남"등의 내용을 적어주시면, 보다 원활한 상담이 가능합니다.
                </strong>
            </span>
        </p>
        <p>
            <span style="font-size: 16px;">
                <strong>
                    ※ 일요일, 휴일,명절 서비스 매칭 시, 한 아이 당 주말비용(5000원) 추가됩니다! 추가비용을 원치 않을 시, 평일 일정으로 적어주세요.
                </strong>
            </span>
        </p>
        <br>
        <p>
            <span style="font-size: 16px;">
                <strong style="color: red">
                    ※  주차공간이 없을 경우, 서비스가 불가할 수 있으므로 반드시 고지 부탁드립니다.
                </strong>
            </span>
        </p>
        <p>
            <span style="font-size: 16px;">
                <strong style="color: red">
                    ※ 부득이한 주차비,톨비 발생시, 비용은 보호자가 전액 부담합니다.
                </strong>
            </span>
        </p>
        <p>
            <span style="font-size: 16px;">
                <strong style="color: red">
                    ※경기, 인천 지역은 일부 톨비가 발생될 수 있습니다/매칭되는 매니저 마다 상이합니다.
                </strong>
            </span>
        </p>
        <br>
        <h3 style="margin: 0px 0px 3px; padding: 0px; font-weight: 600; font-size: 15px;">
        <span style="font-size: 16px;">
        [ 제공 서비스 ]
        </span>
        </h3>
        <p><span style="font-size: 14px;">* 전체클리핑</span></p>
        <p><span style="font-size: 14px;">* 목욕 및 위생 미용</span></p>

        <br>

        <h3 style="margin: 0px 0px 3px; padding: 0px; font-weight: 600; font-size: 15px;">
        <span style="font-size: 16px;">
        [ 준비물안내 ]
        </span>
        </h3>
        <p><span style="font-size: 14px;">샴푸,린스,타올,드라이기,빗</span></p>
        <p><span style="font-size: 14px;">위생미용 시:발톱깍이, 귀 세정제(귀 클리너), 칫솔, 치약</span></p>

        <br>

        <p><span style="font-size: 14px;">* 펫 매니저가 준비물을 챙겨가지만, 되도록이면 아이가 사용하는 물품, 제품을 
        사용하는 것이 좀 더 안전합니다.</span></p>

        <p><span style="font-size: 14px;">* 양치를 희망하시는 경우 칫솔, 치약을 준비해 주세요!</span></p>
        <br>
        `);
    } else if (idx === '2') {
        setInnerHTML(`
        <h3 style="margin: 0px 0px 3px; padding: 0px; font-weight: 600; font-size: 15px;">
        [서비스이용전 주의사항]
        </h3>
        <div class="notandum-p-text">
        <p>
            <strong>
            <span style="font-size: 16px;">
                ※ <span style="color: blue;">미용차가 아닙니다</span>.
            </span>
                매니저가 미용용품을 구비하여 보호자님 댁에 방문하여 서비스하는 상품입니다.
            </strong>
        </p>
        <br>
        <p>
            <span style="font-size: 16px;">
                <strong>
                    ※ 신청하신 미용스타일에 맞춰 스케줄관리를 하기때문에 미용스타일변경이 필요하실경우, 사전에 꼭 말씀주셔야 합니다.
                </strong>
                <strong style="color: blue;">
                    현장에서 스타일변경을 원하실경우, 다음타임 스케줄로 인해 변경이 불가할 수 있습니다.
                </strong>
            </span>
        </p>
        <br>
        <p>
            <span style="font-size: 16px;">
                <strong>
                    ※ 반려동물의 성향(입질), 사회성, 분리불안, 컨디션, 스트레스 등에 따라 서비스가 중단될 수 있습니다.
                </strong>
            </span>
        </p>
        <br>
        <p>
            <span style="font-size: 16px;">
                <strong>
                    ※ 털 엉킴이 심하거나 피부 상태가 좋지 않을 경우 서비스 진행이 어렵거나, 추가요금이 발생할 수 있습니다.
                </strong>
            </span>
        </p>
        <br>
        <p>
            <span style="font-size: 16px;">
                <strong>
                    ※  당일 예약은 불가하며 <u style="color: red;">신청일 기준 최소 2~3일 전에 예약하시길 바랍니다.</u>
                </strong>
            </span>
        </p>
        <p>
            <span style="font-size: 16px;">
                <strong>
                    ※ 주문 시, '추가 요청사항'에 요청 사항을 상세하게 적어주시면, 원활한 상담이 가능합니다.
                </strong>
            </span>
        </p>
        <p>
            <span style="font-size: 16px;">
                <strong>
                    ※ *배넷 목욕, 미용 등은 5차 접종이 끝난 후 일주일이 지난 시점에 예약 주시길 권해드립니다.
                    (12개월 이내의 아이일 경우, 추가 요청 사항에 "접종 후 일주일 지남"등의 내용을 적어주시면, 보다 원활한 상담이 가능합니다.
                </strong>
            </span>
        </p>
        <p>
            <span style="font-size: 16px;">
                <strong>
                    ※ 일요일, 휴일,명절 서비스 매칭 시, 한 아이 당 주말비용(5000원) 추가됩니다! 추가비용을 원치 않을 시, 평일 일정으로 적어주세요.
                </strong>
            </span>
        </p>
        <br>
        <p>
            <span style="font-size: 16px;">
                <strong style="color: red">
                    ※  주차공간이 없을 경우, 서비스가 불가할 수 있으므로 반드시 고지 부탁드립니다.
                </strong>
            </span>
        </p>
        <p>
            <span style="font-size: 16px;">
                <strong style="color: red">
                    ※ 부득이한 주차비,톨비 발생시, 비용은 보호자가 전액 부담합니다.
                </strong>
            </span>
        </p>
        <p>
            <span style="font-size: 16px;">
                <strong style="color: red">
                    ※경기, 인천 지역은 일부 톨비가 발생될 수 있습니다/매칭되는 매니저 마다 상이합니다.
                </strong>
            </span>
        </p>
        <br>
        <h3 style="margin: 0px 0px 3px; padding: 0px; font-weight: 600; font-size: 15px;">
        <span style="font-size: 16px;">
        [ 제공 서비스 ]
        </span>
        </h3>
        <p><span style="font-size: 14px;">* 목욕</span></p>
        <p><span style="font-size: 14px;">* 위생 미용</span></p>
        <p><span style="font-size: 14px;">(귀청소 / 양치 / 눈곱 제거 / 발톱정리 / 
        털정리(생식기, 항문, 발바닥) / 항문낭 관리)</span></p>

        <br>

        <h3 style="margin: 0px 0px 3px; padding: 0px; font-weight: 600; font-size: 15px;">
        <span style="font-size: 16px;">
        [ 준비물안내 ]
        </span>
        </h3>
        <p><span style="font-size: 14px;">샴푸,린스,타올,드라이기,빗</span></p>
        <p><span style="font-size: 14px;">위생미용 시:발톱깍이, 귀 세정제(귀 클리너), 칫솔, 치약</span></p>

        <br>

        <p><span style="font-size: 14px;">* 펫 매니저가 준비물을 챙겨가지만, 되도록이면 아이가 사용하는 물품, 제품을 
        사용하는 것이 좀 더 안전합니다.</span></p>

        <p><span style="font-size: 14px;">* 양치를 희망하시는 경우 칫솔, 치약을 준비해 주세요!</span></p>
        <br>
        `);
    } else if (idx === '3') {
        setInnerHTML(`
        <h3 style="margin: 0px 0px 3px; padding: 0px; font-weight: 600; font-size: 15px;">
        [서비스이용전 주의사항]
        </h3>
        <div class="notandum-p-text">
        <p>
            <strong>
            <span style="font-size: 16px;">
                ※ <span style="color: blue;">미용차가 아닙니다</span>.
            </span>
                매니저가 미용용품을 구비하여 보호자님 댁에 방문하여 서비스하는 상품입니다.
            </strong>
        </p>
        <br>
        <p>
            <span style="font-size: 16px;">
                <strong>
                    ※ 신청하신 미용스타일에 맞춰 스케줄관리를 하기때문에 미용스타일변경이 필요하실경우, 사전에 꼭 말씀주셔야 합니다.
                </strong>
                <strong style="color: blue;">
                    현장에서 스타일변경을 원하실경우, 다음타임 스케줄로 인해 변경이 불가할 수 있습니다.
                </strong>
            </span>
        </p>
        <br>
        <p>
            <span style="font-size: 16px;">
                <strong>
                    ※ 반려동물의 성향(입질), 사회성, 분리불안, 컨디션, 스트레스 등에 따라 서비스가 중단될 수 있습니다.
                </strong>
            </span>
        </p>
        <br>
        <p>
            <span style="font-size: 16px;">
                <strong>
                    ※ 털 엉킴이 심하거나 피부 상태가 좋지 않을 경우 서비스 진행이 어렵거나, 추가요금이 발생할 수 있습니다.
                </strong>
            </span>
        </p>
        <br>
        <p>
            <span style="font-size: 16px;">
                <strong>
                    ※  당일 예약은 불가하며 <u style="color: red;">신청일 기준 최소 2~3일 전에 예약하시길 바랍니다.</u>
                </strong>
            </span>
        </p>
        <p>
            <span style="font-size: 16px;">
                <strong>
                    ※ 주문 시, '추가 요청사항'에 요청 사항을 상세하게 적어주시면, 원활한 상담이 가능합니다.
                </strong>
            </span>
        </p>
        <br>
        <p>
            <span style="font-size: 16px;">
                <strong style="color: red">
                    ※  주차공간이 없을 경우, 서비스가 불가할 수 있으므로 반드시 고지 부탁드립니다.
                </strong>
            </span>
        </p>
        <p>
            <span style="font-size: 16px;">
                <strong style="color: red">
                    ※ 부득이한 주차비,톨비 발생시, 비용은 보호자가 전액 부담합니다.
                </strong>
            </span>
        </p>
        <p>
            <span style="font-size: 16px;">
                <strong style="color: red">
                    ※경기, 인천 지역은 일부 톨비가 발생될 수 있습니다/매칭되는 매니저 마다 상이합니다.
                </strong>
            </span>
        </p>
        <br>
        <h3 style="margin: 0px 0px 3px; padding: 0px; font-weight: 600; font-size: 15px;">
        <span style="font-size: 16px;">
        [ 제공 서비스 ]
        </span>
        </h3>
        <p><span style="font-size: 14px;">* 위생 미용(목욕 불포함 서비스)</span></p>
        <p><span style="font-size: 14px;">(귀청소 / 양치 / 눈곱 제거 / 발톱정리 / 
        털정리(생식기, 항문, 발바닥) / 항문낭 관리)</span></p>

        <br>

        <span style="font-size: 16px; font-weight: 600; font-size: 15px;">
        <u>부분 미용 및 산책 서비스 옵션 추가가 가능합니다!</u>
        </span>
        <p><span style="font-size: 14px;">*부분미용이란? 닭발 or 발(발 위아래, 발등까지 미는거)/
        귀 길이 조정등 미용은 위생미용 선택 후,</span></p>
        <p><span style="font-size: 14px;">옵션으로 선택해야 진행 가능(추가를 원할 경우 문의 주세요)</span></p>

        <br>

        <h3 style="margin: 0px 0px 3px; padding: 0px; font-weight: 600; font-size: 15px;">
        <span style="font-size: 16px;">
        [ 준비물안내 ]
        </span>
        </h3>
        <p><span style="font-size: 14px;">위생미용 시:발톱깍이, 귀 세정제(귀 클리너), 칫솔, 치약</span></p>

        <br>

        <p><span style="font-size: 14px;">* 펫 매니저가 준비물을 챙겨가지만, 되도록이면 아이가 사용하는 물품, 제품을 
        사용하는 것이 좀 더 안전합니다.</span></p>

        <p><span style="font-size: 14px;">* 양치를 희망하시는 경우 칫솔, 치약을 준비해 주세요!</span></p>
        <br>
        `);
    } else if (idx === '4') {
        setInnerHTML(`
        <h3 style="margin: 0px 0px 3px; padding: 0px; font-weight: 600; font-size: 15px;">
        <span style="font-size: 16px;">
        [ 제공 서비스 ]
        </span>
        </h3>
        <p><span style="font-size: 14px;">* 전문 펫 매니저와 즐거운 돌봄(+산책)/</span></p>
        <p><span style="font-size: 14px;">  배변 및 환경 정리, 주변 정리, 약 주기, 밥 챙겨주기(반려견 맞춤 배식), 실내놀이 등</span></p>

        <br>

        <span style="font-size: 16px; font-weight: 600; font-size: 15px; color: blue;">
        - 당일 예약은 불가하며 신청일 기준 2-3일 전부터 예약이 가능합니다.
        </span>
        <p><span style="font-size: 16px;"><strong>※ 주문시, '추가 요청사항'에 요청 사항을 상세하게 적어주시면, 원할한 상담이 가능합니다.</strong></span></p>

        <br>
        
        <p>
            <span style="font-size: 16px;">
                <strong style="color: red">
                    ※  주차공간이 없을 경우, 서비스가 불가할 수 있으므로 반드시 고지 부탁드립니다.
                </strong>
            </span>
        </p>
        <p>
            <span style="font-size: 16px;">
                <strong style="color: red">
                    ※ 부득이한 주차비,톨비 발생시, 비용은 보호자가 전액 부담합니다.
                </strong>
            </span>
        </p>
        <p>
            <span style="font-size: 16px;">
                <strong style="color: red">
                    ※경기, 인천 지역은 일부 톨비가 발생될 수 있습니다/매칭되는 매니저 마다 상이합니다.
                </strong>
            </span>
        </p>
        <br>

        <p><span style="font-size: 16px;">※ 3개월 이내의 날짜로 선택해 주시면 됩니다.</span></p>
        <p><span style="font-size: 16px;">※ 서비스 예약 전, 카카오톡 문의 "펫vip" 대화 /02.890.0788 전화</span></p>
        <p><span style="font-size: 16px;">문의 주세요!</span></p>

        <br>
        `);
    }else if (idx === '5'){
        setInnerHTML(`
            <h3 style="margin: 0px 0px 3px; padding: 0px; font-weight: 600; font-size: 15px;">
            [서비스이용전 주의사항]
            </h3>

            <br>

            <p>
            <span style="font-size: 16px">
            <strong>
            ※ <span style="color: blue;">100만원 정액권</span>으로 잔액이 소진될 때까지 PETVIP의 모든 케어서비스를 이용할 수 있습니다.
            <u>(목욕(+위생미용) 1회를 </u>무료(10kg 미만 아이까지 제공 가능)로 받아볼 수 있습니다.
            </strong>
            <br>
            <strong>
            ※정액권의 <span style="color: blue;">유효기간은 16개월</span>입니다.
            </strong>
            <br>
            <strong>
            ※정액권은 이벤트 행사로 서비스를 받았을 경우, 환불은 불가합니다.
            </strong>
            </span>
            </p>

            <br>

            <p>
            <span style="font-size: 16px">
            서비스 세부 이용은 사전 상담 후 확정됩니다.
            </span>
            </p>

            <br>

            <p>
            *위생미용 이란?  귀청소 / 양치 / 눈곱 제거 / 발톱정리 / 털정리(생식기, 항문, 발바닥) / 항문낭 관리
            </p>

            <p>
            <span style="font-size: 16px">
            <strong>-----------------------------------------------</strong>
            </span>
            </p>

            <p>
            <span style="font-size: 16px">
            <strong>
            ※ <span style="color: blue">미용차가 아닙니다</span>. 미용의 경우 매니저(반려견 미용사)가 미용용품을 구비해 보호자님 댁에 방문해 서비스를 진행합니다.
            </strong>
            <br>
            <strong>
            ※ 현장에서 스타일 및 서비스 변경을 원하실 경우, 다음 타임 스케출로 인해 변경이 불가할 수 있습니다.
            </strong>
            <br>
            <strong>
            ※ 기본 전체 미용은<u> 3mm로 몸, 얼굴, 다리 전부 클리핑으로 미용합니다.</u>
            </strong>
            <br>
            <strong style="color: blue;">
            ※ 스포팅과 전체 가위컷의 경우 추가 비용이 발생되며, 개인결제창 보내드립니다. 진행을 원하시면 상담톡 및 고객센터로 문의하여 주시기 바랍니다.
            </strong>
            </span>
            </p>

            <br>

            <p>
            <span style="font-size: 16px">
            <strong>
            ※ 반려동물의 성향(입질), 사회성, 분리불안, 컨디션, 스트레스 등에 따라 서비스가 중단될 수 있습니다.
            </strong>
            <br>
            <strong>
            ※ *배넷 목욕, 미용 등은 5차 접종이 끝난 후 일주일이 지난 시점에 예약 주시길 권해드립니다.(12개월 이내의 아이일 경우, 추가 요청 사항에"접종 후 일주일 지남")등의 내용을 적어주시면, 보다 원할한 상담이 가능합니다.
            </strong>
            </span>
            </p>

            <br>

            <p>
            <span style="font-size: 16px">
            <strong>
            ※ 털 엉킴이 심하거나 피부 상태가 좋지 않을 경우, 서비스 진행이 어렵거나 추가요금이 발생할 수 있습니다.
            </strong>
            </span>
            </p>

            <br>

            <p>
            <span style="font-size: 16px">
            <strong>
            ※ 당일 예약은 불가하며 <span style="color: red;">신청일 기준 최소 2~3일 전에 예약하시길 바랍니다.</span>
            </strong>
            </span>
            </p>

            <p>
            <span style="font-size: 16px">
            <strong>
            ※ 주문 시, '추가 요청사항'에 요청 사항을 상세하게 적어주시면, 원할한 상담이 가능합니다.
            </strong>
            </span>
            </p>

            <br>

            <p>
            <span style="font-size: 16px">
            <strong style="color: red;">
            ※ 주차공간이 없을 경우, 서비스가 불가할 수 있으므로 반드시 고지 부탁드립니다.
            </strong>
            </span>
            </p>

            <p>
            <span style="font-size: 16px">
            <strong style="color: red;">
            ※ 부득이한 주차비, 톨비 발생시, 비용은 보호자가 전액 부담합니다.
            </strong>
            </span>
            </p>

            <p>
            <span style="font-size: 16px">
            <strong style="color: red;">
            ※ 경기, 인천 지역은 일부 톨비가 발생될 수 있습니다/매칭되는 매니저 마다 상이합니다.
            </strong>
            </span>
            </p>

            <br>

            <h3 style="margin: 0px 0px 3px; padding: 0px; font-weight: 600; font-size: 15px;">
            <span style="font-size: 16px;">[제공서비스]</span>
            </h3>

            <p>
            <span style="font-size: 14px;">
            * 전체미용(클리핑,스포팅,전체가위컷)
            </span>
            </p>
            <p>
            <span style="font-size: 14px;">
            * 목욕(+위생 미용)
            </span>
            </p>
            <p>
            <span style="font-size: 14px;">
            * 위생 미용(only)
            </span>
            </p>
            <p>
            <span style="font-size: 14px;">
            * 산책
            </span>
            </p>
            <p>
            <span style="font-size: 14px;">
            * 돌봄
            </span>
            </p>
            <p>
            <span style="font-size: 14px;">
            * 방문훈련(+모니터링 1회)
            </span>
            </p>
            <br>
        `);
    }else if(idx === '6'){
        setInnerHTML(`
        <h3 style="margin: 0px 0px 3px; padding: 0px; font-weight: 600; font-size: 15px;">
        [서비스이용전 주의사항]
        </h3>

        <br>

        <p>
        <span style="font-size: 16px">
        <strong>
        ※ <span style="color: blue;">50만원 정액권</span>으로 잔액이 소진될 때까지 PETVIP의 모든 케어서비스를 이용할 수 있습니다.
        (약 3만원 상당의 <u>위생미용(목욕 불포함) 2회를</u>무료로 받아볼 수 있습니다.
        </strong>
        <br>
        <strong>
        ※정액권의 <span style="color: blue;">유효기간은 12개월</span>입니다.
        </strong>
        <br>
        <strong>
        ※정액권은 이벤트 행사로 서비스를 받았을 경우, 환불은 불가합니다.
        </strong>
        </span>
        </p>

        <br>

        <p>
        <span style="font-size: 16px">
        서비스 세부 이용은 사전 상담 후 확정됩니다.
        </span>
        </p>

        <br>

        <p>
        *위생미용 이란?  귀청소 / 양치 / 눈곱 제거 / 발톱정리 / 털정리(생식기, 항문, 발바닥) / 항문낭 관리
        </p>

        <p>
        <span style="font-size: 16px">
        <strong>-----------------------------------------------</strong>
        </span>
        </p>

        <p>
        <span style="font-size: 16px">
        <strong>
        ※ <span style="color: blue">미용차가 아닙니다</span>. 미용의 경우 매니저(반려견 미용사)가 미용용품을 구비해 보호자님 댁에 방문해 서비스를 진행합니다.
        </strong>
        <br>
        <strong>
        ※ 현장에서 스타일 및 서비스 변경을 원하실 경우, 다음 타임 스케출로 인해 변경이 불가할 수 있습니다.
        </strong>
        <br>
        <strong>
        ※ 기본 전체 미용은<u> 3mm로 몸, 얼굴, 다리 전부 클리핑으로 미용합니다.</u>
        </strong>
        <br>
        <strong style="color: blue;">
        ※ 스포팅과 전체 가위컷의 경우 추가 비용이 발생되며, 개인결제창 보내드립니다. 진행을 원하시면 상담톡 및 고객센터로 문의하여 주시기 바랍니다.
        </strong>
        </span>
        </p>

        <br>

        <p>
        <span style="font-size: 16px">
        <strong>
        ※ 반려동물의 성향(입질), 사회성, 분리불안, 컨디션, 스트레스 등에 따라 서비스가 중단될 수 있습니다.
        </strong>
        <br>
        <strong>
        ※ *배넷 목욕, 미용 등은 5차 접종이 끝난 후 일주일이 지난 시점에 예약 주시길 권해드립니다.(12개월 이내의 아이일 경우, 추가 요청 사항에"접종 후 일주일 지남")등의 내용을 적어주시면, 보다 원할한 상담이 가능합니다.
        </strong>
        </span>
        </p>

        <br>

        <p>
        <span style="font-size: 16px">
        <strong>
        ※ 털 엉킴이 심하거나 피부 상태가 좋지 않을 경우, 서비스 진행이 어렵거나 추가요금이 발생할 수 있습니다.
        </strong>
        </span>
        </p>

        <br>

        <p>
        <span style="font-size: 16px">
        <strong>
        ※ 당일 예약은 불가하며 <span style="color: red;">신청일 기준 최소 2~3일 전에 예약하시길 바랍니다.</span>
        </strong>
        </span>
        </p>

        <p>
        <span style="font-size: 16px">
        <strong>
        ※ 주문 시, '추가 요청사항'에 요청 사항을 상세하게 적어주시면, 원할한 상담이 가능합니다.
        </strong>
        </span>
        </p>

        <br>

        <p>
        <span style="font-size: 16px">
        <strong style="color: red;">
        ※ 주차공간이 없을 경우, 서비스가 불가할 수 있으므로 반드시 고지 부탁드립니다.
        </strong>
        </span>
        </p>

        <p>
        <span style="font-size: 16px">
        <strong style="color: red;">
        ※ 부득이한 주차비, 톨비 발생시, 비용은 보호자가 전액 부담합니다.
        </strong>
        </span>
        </p>

        <p>
        <span style="font-size: 16px">
        <strong style="color: red;">
        ※ 경기, 인천 지역은 일부 톨비가 발생될 수 있습니다/매칭되는 매니저 마다 상이합니다.
        </strong>
        </span>
        </p>

        <br>

        <h3 style="margin: 0px 0px 3px; padding: 0px; font-weight: 600; font-size: 15px;">
        <span style="font-size: 16px;">[제공서비스]</span>
        </h3>

        <p>
        <span style="font-size: 14px;">
        * 전체미용(클리핑,스포팅,전체가위컷)
        </span>
        </p>
        <p>
        <span style="font-size: 14px;">
        * 목욕(+위생 미용)
        </span>
        </p>
        <p>
        <span style="font-size: 14px;">
        * 위생 미용(only)
        </span>
        </p>
        <p>
        <span style="font-size: 14px;">
        * 산책
        </span>
        </p>
        <p>
        <span style="font-size: 14px;">
        * 돌봄
        </span>
        </p>
        <p>
        <span style="font-size: 14px;">
        * 방문훈련(+모니터링 1회)
        </span>
        </p>
        <br>
        `);
    }else if(idx === '7'){
        setInnerHTML(`
        <h3 style="margin: 0px 0px 3px; padding: 0px; font-weight: 600; font-size: 15px;">
        [서비스이용전 주의사항]
        </h3>

        <br>

        <p>
        <span style="font-size: 16px">
        <strong>
        ※ <span style="color: blue;">30만원 정액권</span>으로 잔액이 소진될 때까지 PETVIP의 모든 케어서비스를 이용할 수 있습니다.
        (약 3만원 상당의 <u>위생미용(목욕 불포함) 1회를</u>무료로 받아볼 수 있습니다.
        </strong>
        <br>
        <strong>
        ※정액권의 <span style="color: blue;">유효기간은 12개월</span>입니다.
        </strong>
        <br>
        <strong>
        ※정액권은 이벤트 행사로 서비스를 받았을 경우, 환불은 불가합니다.
        </strong>
        </span>
        </p>

        <br>

        <p>
        <span style="font-size: 16px">
        서비스 세부 이용은 사전 상담 후 확정됩니다.
        </span>
        </p>

        <br>

        <p>
        *위생미용 이란?  귀청소 / 양치 / 눈곱 제거 / 발톱정리 / 털정리(생식기, 항문, 발바닥) / 항문낭 관리
        </p>

        <p>
        <span style="font-size: 16px">
        <strong>-----------------------------------------------</strong>
        </span>
        </p>

        <p>
        <span style="font-size: 16px">
        <strong>
        ※ <span style="color: blue">미용차가 아닙니다</span>. 미용의 경우 매니저(반려견 미용사)가 미용용품을 구비해 보호자님 댁에 방문해 서비스를 진행합니다.
        </strong>
        <br>
        <strong>
        ※ 현장에서 스타일 및 서비스 변경을 원하실 경우, 다음 타임 스케출로 인해 변경이 불가할 수 있습니다.
        </strong>
        <br>
        <strong>
        ※ 기본 전체 미용은<u> 3mm로 몸, 얼굴, 다리 전부 클리핑으로 미용합니다.</u>
        </strong>
        <br>
        <strong style="color: blue;">
        ※ 스포팅과 전체 가위컷의 경우 추가 비용이 발생되며, 개인결제창 보내드립니다. 진행을 원하시면 상담톡 및 고객센터로 문의하여 주시기 바랍니다.
        </strong>
        </span>
        </p>

        <br>

        <p>
        <span style="font-size: 16px">
        <strong>
        ※ 반려동물의 성향(입질), 사회성, 분리불안, 컨디션, 스트레스 등에 따라 서비스가 중단될 수 있습니다.
        </strong>
        <br>
        <strong>
        ※ *배넷 목욕, 미용 등은 5차 접종이 끝난 후 일주일이 지난 시점에 예약 주시길 권해드립니다.(12개월 이내의 아이일 경우, 추가 요청 사항에"접종 후 일주일 지남")등의 내용을 적어주시면, 보다 원할한 상담이 가능합니다.
        </strong>
        </span>
        </p>

        <br>

        <p>
        <span style="font-size: 16px">
        <strong>
        ※ 털 엉킴이 심하거나 피부 상태가 좋지 않을 경우, 서비스 진행이 어렵거나 추가요금이 발생할 수 있습니다.
        </strong>
        </span>
        </p>

        <br>

        <p>
        <span style="font-size: 16px">
        <strong>
        ※ 당일 예약은 불가하며 <span style="color: red;">신청일 기준 최소 2~3일 전에 예약하시길 바랍니다.</span>
        </strong>
        </span>
        </p>

        <p>
        <span style="font-size: 16px">
        <strong>
        ※ 주문 시, '추가 요청사항'에 요청 사항을 상세하게 적어주시면, 원할한 상담이 가능합니다.
        </strong>
        </span>
        </p>

        <br>

        <p>
        <span style="font-size: 16px">
        <strong style="color: red;">
        ※ 주차공간이 없을 경우, 서비스가 불가할 수 있으므로 반드시 고지 부탁드립니다.
        </strong>
        </span>
        </p>

        <p>
        <span style="font-size: 16px">
        <strong style="color: red;">
        ※ 부득이한 주차비, 톨비 발생시, 비용은 보호자가 전액 부담합니다.
        </strong>
        </span>
        </p>

        <p>
        <span style="font-size: 16px">
        <strong style="color: red;">
        ※ 경기, 인천 지역은 일부 톨비가 발생될 수 있습니다/매칭되는 매니저 마다 상이합니다.
        </strong>
        </span>
        </p>

        <br>

        <h3 style="margin: 0px 0px 3px; padding: 0px; font-weight: 600; font-size: 15px;">
        <span style="font-size: 16px;">[제공서비스]</span>
        </h3>

        <p>
        <span style="font-size: 14px;">
        * 전체미용(클리핑,스포팅,전체가위컷)
        </span>
        </p>
        <p>
        <span style="font-size: 14px;">
        * 목욕(+위생 미용)
        </span>
        </p>
        <p>
        <span style="font-size: 14px;">
        * 위생 미용(only)
        </span>
        </p>
        <p>
        <span style="font-size: 14px;">
        * 산책
        </span>
        </p>
        <p>
        <span style="font-size: 14px;">
        * 돌봄
        </span>
        </p>
        <p>
        <span style="font-size: 14px;">
        * 방문훈련(+모니터링 1회)
        </span>
        </p>
        <br>
        `);
    }else if(idx === '8'){
        setInnerHTML(`
        <h3 style="margin: 0px 0px 3px; padding: 0px; font-weight: 600; font-size: 15px;">
        <span style="font-size: 16px;">[제공서비스]</span>
        </h3>
        <p>
        <span style="font-size: 14px;">
        * 꽃단장 패키지 촬영
        </span>
        </p>
        <p>
        <span style="font-size: 14px;">
        * 나들이 패키지 촬영
        </span>
        </p>
        <div style="height: 50px;"></div>
        <p>
        <span style="font-size: 16px">
        ※ 일요일은 서비스가 불가하고 3개월 이내의 날짜로 선택해 주시면 됩니다.
        </span>
        </p>
        <p>
        <span style="font-size: 16px">
        ※ 당일 예약은 불가할 경우가 많으니 최소 2-3일 전에 예약하시길 바랍니다.
        </span>
        </p>
        <p>
        <span style="font-size: 16px">
        ※ 주차공간이 없을 경우, 서비스가 불가할 수 있으므로 반드시 고지부탁드립니다. 부득이한 주차비 발생시, 주차비는 보호자가 전액 부담합니다.
        </span>
        </p>
        <br>
        `);
    }
    changeImage(idx);
    DetailchangeImage(idx);
    setDetailImageSize(idx);
}

onLoadFunction();

function setDetailText() {
    const idx = getQueryParam('idx');
    const DetailidxText = document.getElementById('serviceDetail-text');

    function setInnerHTML(html) {
        DetailidxText.innerHTML = html;
    }

    if (idx === '1' || idx === '2' || idx === '3' || idx === '5' || idx === '6' || idx === '7') {
        setInnerHTML(`
        <h3 style="margin: 0px 0px 3px; padding: 0px; font-weight: 600; font-size: 18px;">
        [보호자 준비물 안내]
        </h3>
        <p><span style="font-size: 16px;">샴푸,타올,드라이기</span></p>
        <br>
        <p><span style="font-size: 16px;">* 펫 매니저가 필요한 용품을 구비하여 방문합니다.</span></p>
        <p><span style="font-size: 16px;">반려견의 전용용품을 사용해야 할 경우, 사전에 반드시 알려주세요.</span></p>
        <br>
        <p><span style="font-size: 16px;">* 양치를 희망하시는 경우 칫솔, 치약을 준비해주세요!</span></p>
        <div style="height: 70px"></div>
        <h3 style="margin: 0px 0px 3px; padding: 0px; font-weight: 600; font-size: 18px;">
        [서비스 대체 안내]
        </h3>
        <p><span style="font-size: 16px;">반려동물의 성향(입질), 사회성, 분리불안, 컨디션, 스트레스 등에 따라 다른 서비스(실내놀이, 산책 등)로 대체 및 추가요금 발생될 수 있습니다.</span></p>
        <br>
        <p><span style="font-size: 16px; color: red;"><strong>-대형견 : 35kg 이상은 고객센터에 문의 부탁드립니다.</strong></span></p>
        <div style="height: 70px"></div>
        <h3 style="margin: 0px 0px 3px; padding: 0px; font-weight: 600; font-size: 18px;">
        [털 엉킴이 심한 경우]
        </h3>
        <p><span style="font-size: 16px;">털엉킴, 털뭉침이 심한경우, 추가요금이 발생될 수 있습니다.</span></p>
        <div style="height: 70px"></div>
        <h3 style="margin: 0px 0px 3px; padding: 0px; font-weight: 600; font-size: 18px;">
        [피부 질환이 심하거나 피부 상태가 좋지 않을 경우]
        </h3>
        <p><span style="font-size: 16px;">-병원 진료를 먼저 받으시길 권유 드립니다.</span></p>
        <p><span style="font-size: 16px;">-무리하게 서비스를 진행할 경우 피부 질환이 더 심해 질 수 있습니다.</span></p>
        <p><span style="font-size: 16px;">-사전에 질환에 대한 내용을 반드시 고지해주세요</span></p>
        <div style="height: 70px"></div>
        <h3 style="margin: 0px 0px 3px; padding: 0px; font-weight: 600; font-size: 18px;">
        [서비스 기간]
        </h3>
        <p><span style="font-size: 16px;">서비스 기간은 최대 1년입니다.</span></p>
        <div style="height: 70px"></div>
        <h3 style="margin: 0px 0px 3px; padding: 0px; font-weight: 600; font-size: 18px;">
        [취소 및 환불 정책]
        </h3>
        <p><span style="font-size: 16px;">-서비스 예약 2일전 취소 시,금액의 70%환불</span></p>
        <p><span style="font-size: 16px;">-서비스 예약 1일전 취소 시,금액의 50%환불</span></p>
        <p><span style="font-size: 16px;">-서비스 예약 당일 취소 시, 연락이 닿지 않을 경우 1회 서비스 전체 비용이 취소 수수료로 발생됩니다.</span></p>
        <div style="height: 70px"></div>
        `);
    }else if(idx === '4'){
        setInnerHTML(`
        <h3 style="margin: 0px 0px 3px; padding: 0px; font-weight: 600; font-size: 18px;">
        ※ 실내 돌봄
        </h3>
        <p><span style="font-size: 16px;">* 배변 및 환경 정리</span></p>
        <p><span style="font-size: 16px;">* 반려동물 맞춤 배식</span></p>
        <p><span style="font-size: 16px;">* 실내놀이</span></p>
        <div style="height: 70px"></div>
        <h3 style="margin: 0px 0px 3px; padding: 0px; font-weight: 600; font-size: 18px;">
        [다른 서비스로 대체 안내]
        </h3>
        <p><span style="font-size: 16px;">* 반려동물의 성향,사회성,분리불안,컨디션,스트레스 등에 따라 다른 서비스(실내놀이, 돌봄, 상담 등)로 대체 될 수 있음. </span></p>
        <div style="height: 70px"></div>
        `);
    }else if(idx === '8'){
        setInnerHTML(`
        <h3 style="margin: 0px 0px 3px; padding: 0px; font-weight: 600; font-size: 18px;">
        [서비스 대체 안내]
        </h3>
        <p><span style="font-size: 16px;">반려동물의 성향(입질), 사회성, 분리불안, 컨디션, 스트레스 등에 따라 다른 서비스(실내놀이, 산책 등)로 대체 및 추가요금 발생될 수 있습니다.</span></p>
        <br>
        <p><span style="font-size: 16px; color: red;"><strong>-대형견 : 35kg 이상은 고객센터에 문의 부탁드립니다.</strong></span></p>
        <div style="height: 70px"></div>
        <h3 style="margin: 0px 0px 3px; padding: 0px; font-weight: 600; font-size: 18px;">
        [서비스 기간]
        </h3>
        <p><span style="font-size: 16px;">서비스 기간은 최대 1년입니다.</span></p>
        <div style="height: 70px"></div>
        <h3 style="margin: 0px 0px 3px; padding: 0px; font-weight: 600; font-size: 18px;">
        [취소 및 환불 정책]
        </h3>
        <p><span style="font-size: 16px;">-서비스 예약 2일전 취소 시,금액의 70%환불</span></p>
        <p><span style="font-size: 16px;">-서비스 예약 1일전 취소 시,금액의 50%환불</span></p>
        <p><span style="font-size: 16px;">-서비스 예약 당일 취소 시, 연락이 닿지 않을 경우 1회 서비스 전체 비용이 취소 수수료로 발생됩니다.</span></p>
        <div style="height: 70px"></div>
        `);
    }    
}

setDetailText();