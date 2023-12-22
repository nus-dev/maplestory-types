export type Charactor = {
    ocid: string;
};

export type CharacterBasic = {
    data: string; //. example: 2023-12-21T00:00+09:00 //조회 기준일 (KST, 일 단위 데이터로 시, 분은 일괄 0으로 표기)
    character_name: string;
    world_name: string;
    character_gender: string;
    character_class: string;
    character_class_level: string;
    character_level: string;
    character_exp: number; //int64;
    character_exp_rate: string;
    character_guild_name: string;
    character_image: string;
};
export type CharacterPopularity = {
    data: string; //. example: 2023-12-21T00:00+09:00 //조회 기준일 (KST, 일 단위 데이터로 시, 분은 일괄 0으로 표기)
    popularity: number;
};

export type CharacterStat = {
    data: string; //. example: 2023-12-21T00:00+09:00 //조회 기준일 (KST, 일 단위 데이터로 시, 분은 일괄 0으로 표기)
    character_class: string;
    //확인필요
    final_stat: Array<{
        stat_name: string;
        stat_value: string; // 실제값.
    }>;

    remain_ap: number;
};
export type CharacterHyperStat = {
    data: string; //. example: 2023-12-21T00:00+09:00 //조회 기준일 (KST, 일 단위 데이터로 시, 분은 일괄 0으로 표기)
    character_class: string;
    use_preset_no: string;
    use_available_hyper_stat: number;
    hyper_stat_preset_1: Array<HyperStat>;
    hyper_stat_preset_1_remain_point: number;
    hyper_stat_preset_2: Array<HyperStat>;
    hyper_stat_preset_2_remain_point: number;
    hyper_stat_preset_3: Array<HyperStat>;
    hyper_stat_preset_3_remain_point: number;
};

export type HyperStat = {
    stat_type: string;
    stat_point: number;
    stat_level: number;
    stat_increase: string;
};

export type CharacterPropensity = {
    data: string; //. example: 2023-12-21T00:00+09:00 //조회 기준일 (KST, 일 단위 데이터로 시, 분은 일괄 0으로 표기)
    charisma_level: number;
    sensibility_level: number;
    insight_level: number;
    willingness_level: number;
    handicraft_level: number;
    charm_level: number;
};
export type CharacterAbility = {
    date: string; // 조회 기준일 (KST, 일 단위 데이터로 시, 분은 일괄 0으로 표기)
    ability_grade: string; // 어빌리티 등급
    ability_info: Array<{
        ability_no: string; // 어빌리티 번호
        ability_grade: string; // 어빌리티 등급
        ability_value: string; // 어빌리티 옵션 및 수치
    }>;
    remain_fame: number; // 보유 명성치
};
type CharacterItemEquipment = {
    date: string; // 조회 기준일 (KST)
    character_gender: string; // 캐릭터 성별
    character_class: string; // 캐릭터 직업
    item_equipment: Array<{
        item_equipment_part: string; // 장비 부위 명
        equipment_slot: string; // 장비 슬롯 위치
        item_name: string; // 장비 명
        item_icon: string; // 장비 아이콘
        item_description: string; // 장비 설명
        item_shape_name: string; // 장비 외형
        item_shape_icon: string; // 장비 외형 아이콘
        gender: string; // 전용 성별
        item_total_option: EquipmentOption; // 장비 최종 옵션 정보
        item_base_option: EquipmentOption; // 장비 기본 옵션 정보
        potential_option_grade: string; // 잠재능력 등급
        additional_potential_option_grade: string; // 에디셔널 잠재능력 등급
        potential_option_1: string; // 잠재능력 첫 번째 옵션
        potential_option_2: string; // 잠재능력 두 번째 옵션
        potential_option_3: string; // 잠재능력 세 번째 옵션
        additional_potential_option_1: string; // 에디셔널 잠재능력 첫 번째 옵션
        additional_potential_option_2: string; // 에디셔널 잠재능력 두 번째 옵션
        additional_potential_option_3: string; // 에디셔널 잠재능력 세 번째 옵션
        equipment_level_increase: number; // 착용 레벨 증가
        item_exceptional_option: EquipmentOption; // 장비 특별 옵션 정보
        item_add_option: EquipmentOption; // 장비 추가 옵션
        growth_exp: number; // 성장 경험치
        growth_level: number; // 성장 레벨
        scroll_upgrade: string; // 업그레이드 횟수
        cuttable_count: string; // 가위 사용 가능 횟수
        golden_hammer_flag: string; // 황금 망치 재련 적용 여부
        scroll_resilience_count: string; // 복구 가능 횟수
        scroll_upgradeable_count: string; // 업그레이드 가능 횟수
        soul_name: string; // 소울 명
        soul_option: string; // 소울 옵션
        item_etc_option: EquipmentOption; // 장비 기타 옵션 정보
        starforce: string; // 강화 단계
        starforce_scroll_flag: string; // 놀라운 장비 강화 주문서 사용 여부
        item_starforce_option: EquipmentOption; // 장비 스타포스 옵션 정보
        special_ring_level: number; // 특수 반지 레벨
        date_expire: string; // 장비 유효 기간(KST)
    }>;
    title: {
        title_name: string; // 칭호 장비 명
        title_icon: string; // 칭호 아이콘
        title_description: string; // 칭호 설명
        date_expire: string; // 칭호 유효 기간 (KST)
        date_option_expire: string; // 칭호 옵션 유효 기간 (KST)
    };
    dragon_equipment: Array<EquipmentDetail>; // 에반 드래곤 장비 정보
    mechanic_equipment: Array<EquipmentDetail>; // 메카닉 장비 정보
};

export type EquipmentOption = {
    description: string;
    str: string;
    dex: string;
    int: string;
    luk: string;
    max_hp: string;
    max_mp: string;
    attack_power: string;
    magic_power: string;
    armor: string;
    speed: string;
    jump: string;
    boss_damage: string;
    ignore_monster_armor: string;
    all_stat: string;
    damage: string;
    equipment_level_decrease: number;
    max_hp_rate: string;
    max_mp_rate: string;
    base_equipment_level?: number; // Only for item_base_option
};

export type EquipmentDetail = {
    item_equipment_part: string; // 장비 부위 명
    equipment_slot: string; // 장비 슬롯 위치
    item_name: string; // 장비 명
    item_icon: string; // 장비 아이콘
    item_description: string; // 장비 설명
    item_shape_name: string; // 장비 외형
    item_shape_icon: string; // 장비 외형 아이콘
    gender: string; // 전용 성별
    item_total_option: EquipmentOption; // 장비 최종 옵션 정보
    item_base_option: EquipmentOption; // 장비 기본 옵션 정보
    equipment_level_increase: number; // 착용 레벨 증가
    item_exceptional_option: EquipmentOption; // 장비 특별 옵션 정보
    item_add_option: EquipmentOption; // 장비 추가 옵션
    growth_exp: number; // 성장 경험치
    growth_level: number; // 성장 레벨
    scroll_upgrade: string; // 업그레이드 횟수
    cuttable_count: string; // 가위 사용 가능 횟수
    golden_hammer_flag: string; // 황금 망치 재련 적용 여부
    scroll_resilience_count: string; // 복구 가능 횟수
    scroll_upgradeable_count: string; // 업그레이드 가능 횟수
    soul_name: string; // 소울 명
    soul_option: string; // 소울 옵션
    item_etc_option: EquipmentOption; // 장비 기타 옵션 정보
    starforce: string; // 강화 단계
    starforce_scroll_flag: string; // 놀라운 장비 강화 주문서 사용 여부 (0:미사용, 1:사용)
    item_starforce_option: ItemStarforceOption;
    special_ring_level: number; //특수반지레벨
    date_expire: string; // 장비 유효기간
};

export type ItemStarforceOption = {
    description: string; // 장비 스타포스 옵션 정보 설명
    str: string; // STR (Strength)
    dex: string; // DEX (Dexterity)
    int: string; // INT (Intelligence)
    luk: string; // LUK (Luck)
    max_hp: string; // 최대 HP (Health Points)
    max_mp: string; // 최대 MP (Mana Points)
    attack_power: string; // 공격력
    magic_power: string; // 마력 (Magic Power)
    armor: string; // 방어력
    speed: string; // 이동속도 (Movement Speed)
    jump: string; // 점프력 (Jump Power)
};

export type CharacterCashItemEquipment = {
    date: string; // 조회 기준일 (KST)
    character_gender: string; // 캐릭터 성별
    character_class: string; // 캐릭터 직업
    preset_no: number; // 적용 중인 캐시 장비 프리셋 번호

    cash_item_equipment_preset_1: CashItemEquipmentPreset[];
    cash_item_equipment_preset_2: CashItemEquipmentPreset[];
    cash_item_equipment_preset_3: CashItemEquipmentPreset[];

    additional_cash_item_equipment_preset_1: CashItemEquipmentPreset[];
    additional_cash_item_equipment_preset_2: CashItemEquipmentPreset[];
    additional_cash_item_equipment_preset_3: CashItemEquipmentPreset[];
};

export type CashItemEquipmentPreset = {
    cash_item_equipment_part: string; // 캐시 장비 부위 명
    cash_item_equipment_slot: string; // 캐시 장비 슬롯 위치
    cash_item_name: string; // 캐시 장비 명
    cash_item_icon: string; // 캐시 장비 아이콘
    cash_item_description: string; // 캐시 장비 설명
    cash_item_option: CashItemOption[];
    date_expire: string; // 캐시 장비 유효 기간 (KST)
    date_option_expire: string; // 캐시 장비 옵션 유효 기간 (KST)
    cash_item_label: string; // 캐시 장비 라벨 정보
    cash_item_coloring_prism: ColoringPrism;
    base_preset_item_disable_flag: string; // 다른 프리셋에서 장비 추가 장착 없이 1번 프리셋의 장비 공유를 비활성화 했는지 여부
};

export type CashItemOption = {
    option_type: string; // 옵션 타입
    option_value: string; // 옵션 값
};

export type ColoringPrism = {
    description: string; // 캐시 장비 컬러링프리즘 정보
    color_range: string; // 컬러링프리즘 색상 범위
    hue: number; // 컬러링프리즘 색조
    saturation: number; // 컬러링프리즘 채도
    value: number; // 컬러링프리즘 명도
};

export type CharacterSymbolEquipment = {
    date: string; // 조회 기준일 (KST)
    character_class: string; // 캐릭터 직업
    symbol: SymbolInfo[];
};

export type SymbolInfo = {
    symbol_name: string; // 심볼 명
    symbol_icon: string; // 심볼 아이콘
    symbol_description: string; // 심볼 설명
    symbol_force: string; // 심볼로 인한 증가 수치
    symbol_level: number; // 심볼 레벨
    symbol_str: string; // 심볼로 증가한 힘
    symbol_dex: string; // 심볼로 증가한 민첩
    symbol_int: string; // 심볼로 증가한 지력
    symbol_luk: string; // 심볼로 증가한 운
    symbol_hp: string; // 심볼로 증가한 체력
    symbol_growth_count: number; // 현재 보유 성장치
    symbol_require_growth_count: number; // 성장 시 필요한 성장치
};

export type SetEffectInfo = {
    date: string; // 조회 기준일 (KST)
    set_effect: Array<{
        set_name: string; // 세트 효과 명
        total_set_count: number; // 세트 개수 (럭키 아이템 포함)
        set_effect_info: Array<{
            set_count: number; // 세트 효과 레벨 (장비 수)
            set_option: string; // 적용 중인 세트 효과
        }>;
    }>;
};

export type CharacterBeautyEquipment = {
    date: string; // 조회 기준일 (KST)
    character_gender: string; // 캐릭터 성별
    character_class: string; // 캐릭터 직업

    character_hair: CharacterHairFaceInfo; // 캐릭터 헤어 정보
    character_face: CharacterHairFaceInfo; // 캐릭터 성형 정보
    character_skin_name: string; // 피부 명

    additional_character_hair: CharacterHairFaceInfo; // 추가 캐릭터 헤어 정보
    additional_character_face: CharacterHairFaceInfo; // 추가 캐릭터 성형 정보
    additional_character_skin_name: string; // 추가 캐릭터 피부 명
};

export type CharacterHairFaceInfo = {
    description: string; // 정보 설명
    hair_name: string; // 헤어 명 또는 성형 명
    base_color: string; // 베이스 컬러
    mix_color: string; // 믹스 컬러
    mix_rate: string; // 염색 비율
};

export type CharacterAndroidEquipment = {
    date: string; // 조회 기준일 (KST)
    android_name: string; // 안드로이드 명
    android_nickname: string; // 안드로이드 닉네임
    android_icon: string; // 안드로이드 아이콘
    android_description: string; // 안드로이드 아이템 설명

    android_hair: AndroidHairFaceInfo; // 안드로이드 헤어 정보
    android_face: AndroidHairFaceInfo; // 안드로이드 성형 정보
    android_skin_name: string; // 안드로이드 피부 명

    android_cash_item_equipment: AndroidCashItemEquipment[];
    android_ear_sensor_clip_flag: string; // 안드로이드 이어센서 클립 적용 여부
};

export type AndroidHairFaceInfo = {
    description: string; // 정보 설명
    hair_name: string; // 헤어 명 또는 성형 명
    base_color: string; // 베이스 컬러
    mix_color: string; // 믹스 컬러
    mix_rate: string; // 염색 비율
};

export type AndroidCashItemEquipment = {
    cash_item_equipment_part: string; // 안드로이드 캐시 아이템 부위 명
    cash_item_equipment_slot: string; // 안드로이드 캐시 아이템 슬롯 위치
    cash_item_name: string; // 안드로이드 캐시 아이템 명
    cash_item_icon: string; // 안드로이드 캐시 아이템 아이콘
    cash_item_description: string; // 안드로이드 캐시 아이템 설명
    cash_item_option: CashItemOption[]; // 안드로이드 캐시 아이템 옵션
    date_expire: string; // 안드로이드 캐시 아이템 유효 기간 (KST)
    date_option_expire: string; // 안드로이드 캐시 아이템 옵션 유효 기간 (KST)
    cash_item_label: string; // 안드로이드 캐시 아이템 라벨 정보
    cash_item_coloring_prism: ColoringPrism; // 안드로이드 캐시 아이템 컬러링프리즘 정보
};

export type CharacterPetEquipment = {
    date: string; // 조회 기준일 (KST)
    pet_1_name: string; // 펫1 명
    pet_1_nickname: string; // 펫1 닉네임
    pet_1_icon: string; // 펫1 아이콘
    pet_1_description: string; // 펫1 설명
    pet_1_equipment: PetEquipmentInfo; // 펫1 장착 정보
    pet_1_auto_skill: PetAutoSkill; // 펫1 자동스킬 정보
    pet_1_pet_type: string; // 펫1 종류
    pet_1_skill: string[]; // 펫1 보유 스킬
    pet_1_date_expire: string; // 펫1 마법의 시간

    pet_2_name: string; // 펫2 명
    pet_2_nickname: string; // 펫2 닉네임
    pet_2_icon: string; // 펫2 아이콘
    pet_2_description: string; // 펫2 설명
    pet_2_equipment: PetEquipmentInfo; // 펫2 장착 정보
    pet_2_auto_skill: PetAutoSkill; // 펫2 자동스킬 정보
    pet_2_pet_type: string; // 펫2 종류
    pet_2_skill: string[]; // 펫2 보유 스킬
    pet_2_date_expire: string; // 펫2 마법의 시간

    pet_3_name: string; // 펫3 명
    pet_3_nickname: string; // 펫3 닉네임
    pet_3_icon: string; // 펫3 아이콘
    pet_3_description: string; // 펫3 설명
    pet_3_equipment: PetEquipmentInfo; // 펫3 장착 정보
    pet_3_auto_skill: PetAutoSkill; // 펫3 자동스킬 정보
    pet_3_pet_type: string; // 펫3 종류
    pet_3_skill: string[]; // 펫3 보유 스킬
    pet_3_date_expire: string; // 펫3 마법의 시간
};

export type PetEquipmentInfo = {
    description: string; // 장착 정보 설명
    item_name: string; // 아이템 명
    item_icon: string; // 아이템 아이콘
    item_description: string; // 아이템 설명
    item_option: ItemOption[]; // 아이템 옵션
    scroll_upgrade: number; // 업그레이드 횟수
    scroll_upgradeable: number; // 업그레이드 가능 횟수
};

export type PetAutoSkill = {
    description: string; // 자동스킬 정보 설명
    skill_1: string; // 첫 번째 슬롯 자동 스킬
    skill_1_icon: string; // 첫 번째 슬롯 자동 스킬 아이콘
    skill_2: string; // 두 번째 슬롯 자동 스킬
    skill_2_icon: string; // 두 번째 슬롯 자동 스킬 아이콘
};

export type ItemOption = {
    option_type: string; // 옵션 타입
    option_value: string; // 옵션 값
};

export type CharacterSkill = {
    date: string; // 조회 기준일 (KST)
    character_class: string; // 캐릭터 직업
    character_skill_grade: string; // 스킬 전직 차수
    character_skill: SkillInfo[]; // 스킬 정보
};

export type SkillInfo = {
    skill_name: string; // 스킬 명
    skill_description: string; // 스킬 설명
    skill_level: number; // 스킬 레벨
    skill_effect: string; // 스킬 레벨 별 효과 설명
    skill_icon: string; // 스킬 아이콘
};

export type CharacterLinkSkill = {
    date: string; // 조회 기준일 (KST)
    character_class: string; // 캐릭터 직업
    character_link_skill: LinkSkillInfo; // 링크 스킬 정보
    character_owned_link_skill: LinkSkillInfo; // 내 링크 스킬 정보
};

export type LinkSkillInfo = {
    description: string; // 스킬 정보 설명
    skill_name: string; // 스킬 명
    skill_description: string; // 스킬 설명
    skill_level: number; // 스킬 레벨
    skill_effect: string; // 스킬 효과
    skill_icon: string; // 스킬 아이콘
};

export type CharacterVMatrix = {
    date: string; // 조회 기준일 (KST)
    character_class: string; // 캐릭터 직업
    character_v_core_equipment: VCoreInfo[]; // V코어 정보
    character_v_matrix_remain_slot_upgrade_point: number; // 잔여 매트릭스 강화 포인트
};

export type VCoreInfo = {
    slot_id: string; // 슬롯 인덱스
    slot_level: number; // 슬롯 레벨
    v_core_name: string; // 코어 명
    v_core_type: string; // 코어 타입
    v_core_level: number; // 코어 레벨
    v_core_skill_1: string; // 코어에 해당하는 스킬 명
    v_core_skill_2?: string; // 코어에 해당하는 두 번째 스킬 명 (optional)
    v_core_skill_3?: string; // 코어에 해당하는 세 번째 스킬 명 (optional)
};

export type CharacterHexaMatrix = {
    date: string; // 조회 기준일 (KST)
    character_hexa_core_equipment: HexaCoreInfo[]; // HEXA 코어 정보
};

export type HexaCoreInfo = {
    hexa_core_name: string; // 코어 명
    hexa_core_level: number; // 코어 레벨
    hexa_core_type: string; // 코어 타입
    linked_skill: HexaSkill[]; // 연결된 스킬
};

export type HexaSkill = {
    hexa_skill_id: string; // HEXA 스킬 명
};

export type CharacterHexaMatrixStat = {
    date: string; // 조회 기준일 (KST)
    character_class: string; // 캐릭터 직업
    character_hexa_stat_core: HexaStatCoreInfo[]; // HEXA 스탯 코어 정보
    preset_hexa_stat_core: HexaStatCoreInfo[]; // 프리셋 HEXA 스탯 코어 정보
};

export type HexaStatCoreInfo = {
    slot_id: string; // 슬롯 인덱스
    main_stat_name: string; // 메인 스탯 명
    sub_stat_name_1: string; // 첫 번째 서브 명
    sub_stat_name_2: string; // 두 번째 서브 명
    main_stat_level: number; // 메인 스탯 레벨
    sub_stat_level_1: number; // 첫 번째 서브 레벨
    sub_stat_level_2: number; // 두 번째 서브 레벨
    stat_grade: number; // 스탯 코어 등급
};

export type CharacterDojang = {
    date: string; // 조회 기준일 (KST)
    character_class: string; // 캐릭터 직업
    world_name: string; // 월드 명
    dojang_best_floor: number; // 무릉도장 최고 기록 층수
    date_dojang_record: string; // 무릉도장 최고 기록 달성 일 (KST)
    dojang_best_time: number; // 무릉도장 최고 층수 클리어 시간 (초)
};

export type ErrorMessage = {
    error: {
        name: string; // 에러 명
        message: string; // 에러 설명
    };
};

export type Union = {
    date: string; // 조회 기준일 (KST)
    union_level: number; // 유니온 레벨
    union_grade: string; // 유니온 등급
};

export type UnionData = {
    date: string; // 조회 기준일 (KST)
    union_raider_stat: string[]; // 유니온 공격대원 효과
    union_occupied_stat: string[]; // 유니온 공격대 점령 효과
    union_inner_stat: UnionInnerStat[]; // 유니온 공격대 배치
    union_block: UnionBlock[]; // 유니온 블록 정보
};

export type UnionInnerStat = {
    stat_field_id: string; // 공격대 배치 위치 ID
    stat_field_effect: string; // 해당 지역 점령 효과
};

export type UnionBlock = {
    block_type: string; // 블록 모양
    block_class: string; // 블록 해당 캐릭터 직업
    block_level: string; // 블록 해당 캐릭터 레벨
    block_control_point: BlockControlPoint; // 블록 기준점 좌표
    block_position: BlockPosition[]; // 블록이 차지하고 있는 영역 좌표들
};

export type BlockControlPoint = {
    description: string; // 블록 기준점 좌표 설명
    x: number; // 블록 기준점 X좌표
    y: number; // 블록 기준점 Y좌표
};

export type BlockPosition = {
    x: number; // 블록 X좌표
    y: number; // 블록 Y좌표
};

export type Guild = {
    oguild_id: string; // 길드 식별자
};

export type GuildBasic = {
    date: string; // 조회 기준일 (KST)
    world_name: string; // 월드 명
    guild_name: string; // 길드 명
    guild_level: number; // 길드 레벨
    guild_fame: number; // 길드 명성치
    guild_point: number; // 길드 포인트(GP)
    guild_master_name: string; // 길드 마스터 캐릭터 명
    guild_member_count: number; // 길드원 수
    guild_member: string[]; // 길드원 목록
    guild_skill: GuildSkill[]; // 길드 스킬 목록
    guild_nobless_skill: GuildSkill[]; // 노블레스 스킬 목록
    guild_mark: string; // 조합형 길드 마크
    guild_mark_custom: string; // 커스텀 길드 마크 (base64 인코딩 형식)
};

export type GuildSkill = {
    skill_name: string; // 스킬 명
    skill_description: string; // 스킬 설명
    skill_level: number; // 스킬 레벨
    skill_effect: string; // 스킬 레벨 별 효과
    skill_icon: string; // 스킬 아이콘
};

export type User = {
    ouid: string; // 유저 식별자
};

export type CubeHistory = {
    count: number; // 결과 건 수
    next_cursor: string; // 페이징 처리를 위한 cursor
    cube_history: CubeHistoryEntry[]; // 큐브 히스토리
};

export type CubeHistoryEntry = {
    id: string; // 큐브 히스토리 식별자
    character_name: string; // 캐릭터 명
    date_create: string; // 사용 일시 (KST)
    cube_type: string; // 사용 큐브
    item_upgrade_result: string; // 사용 결과
    miracle_time_flag: string; // 미라클 타임 적용 여부
    item_equipment_part: string; // 장비 분류
    item_level: number; // 장비 레벨
    target_item: string; // 큐브 사용한 장비
    potential_option_grade: string; // 잠재능력 등급
    additional_potential_option_grade: string; // 에디셔널 잠재능력 등급
    upgrade_guarantee: boolean; // 천장에 도달하여 확정 등급 상승 여부
    upgrade_guarantee_count: number; // 현재까지 쌓은 스택
    before_potential_option: PotentialOption[]; // 사용 전 잠재능력 옵션
    before_additional_potential_option: PotentialOption[]; // 사용 전 에디셔널 잠재능력 옵션
    after_potential_option: PotentialOption[]; // 사용 후 잠재능력 옵션
    after_additional_potential_option: PotentialOption[]; // 사용 후 에디셔널 잠재능력 옵션
};

export type PotentialOption = {
    value: string; // 옵션 명
    grade: string; // 옵션 등급
};

export type OverallRanking = {
    ranking: OverallRankingEntry[]; // 종합 랭킹 정보
};

export type OverallRankingEntry = {
    date: string; // 랭킹 업데이트 일자 (KST)
    ranking: number; // 종합 랭킹 순위
    character_name: string; // 캐릭터 명
    world_name: string; // 월드 명
    class_name: string; // 직업 명
    sub_class_name: string; // 전직 직업 명
    character_level: number; // 캐릭터 레벨
    character_exp: number; // 캐릭터 경험치
    character_popularity: number; // 캐릭터 인기도
    character_guildname: string; // 길드 명
};

export type UnionRanking = {
    ranking: UnionRankingEntry[]; // 유니온 랭킹 정보
};

export type UnionRankingEntry = {
    date: string; // 랭킹 업데이트 일자 (KST)
    ranking: number; // 유니온 랭킹 순위
    character_name: string; // 캐릭터 명
    world_name: string; // 월드 명
    class_name: string; // 직업 명
    sub_class_name: string; // 전직 직업 명
    union_level: number; // 유니온 레벨
    union_power: number; // 유니온 파워
};

export type GuildRanking = {
    ranking: GuildRankingEntry[]; // 길드 랭킹 정보
};

export type GuildRankingEntry = {
    date: string; // 랭킹 업데이트 일자 (KST)
    ranking: number; // 길드 랭킹 순위
    guild_name: string; // 길드 명
    world_name: string; // 월드 명
    guild_level: number; // 길드 레벨
    guild_master_name: string; // 길드 마스터 캐릭터 명
    guild_mark: string; // 길드 마크
    guild_point: number; // 길드 포인트
};

export type DojangRanking = {
    ranking: DojangRankingEntry[]; // 무릉도장 랭킹 정보
};

export type DojangRankingEntry = {
    date: string; // 랭킹 업데이트 일자 (KST)
    ranking: number; // 무릉도장 랭킹 순위
    character_name: string; // 캐릭터 명
    world_name: string; // 월드 명
    class_name: string; // 직업 명
    sub_class_name: string; // 전직 직업 명
    character_level: number; // 캐릭터 레벨
    dojang_floor: number; // 무릉도장 구간
    dojang_time_record: number; // 무릉도장 클리어 시간 기록 (초)
};

export type TheSeedRanking = {
    ranking: TheSeedRankingEntry[]; // 더 시드 랭킹 정보
};

export type TheSeedRankingEntry = {
    date: string; // 랭킹 업데이트 일자 (KST)
    ranking: number; // 더 시드 랭킹 순위
    character_name: string; // 캐릭터 명
    world_name: string; // 월드 명
    class_name: string; // 직업 명
    sub_class_name: string; // 전직 직업 명
    character_level: number; // 캐릭터 레벨
    theseed_floor: number; // 더 시드 도달 층
    theseed_time_record: number; // 더 시드 클리어 시간 기록 (초)
};

export type AchievementRanking = {
    ranking: AchievementRankingEntry[]; // 업적 랭킹 정보
};

export type AchievementRankingEntry = {
    date: string; // 랭킹 업데이트 일자 (KST)
    ranking: number; // 업적 랭킹 순위
    character_name: string; // 캐릭터 명
    world_name: string; // 월드 명
    class_name: string; // 직업 명
    sub_class_name: string; // 전직 직업 명
    trophy_grade: string; // 업적 등급
    trophy_score: number; // 업적 점수
};
