export type Charactor = {
    ocid: string;
};
export type CharacterBasic = {
    data: string;
    character_name: string;
    world_name: string;
    character_gender: string;
    character_class: string;
    character_class_level: string;
    character_level: string;
    character_exp: number;
    character_exp_rate: string;
    character_guild_name: string;
    character_image: string;
};
export type CharacterPopularity = {
    data: string;
    popularity: number;
};
export type CharacterStat = {
    data: string;
    character_class: string;
    final_stat: Array<{
        stat_name: string;
        stat_value: string;
    }>;
    remain_ap: number;
};
export type CharacterHyperStat = {
    data: string;
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
    data: string;
    charisma_level: number;
    sensibility_level: number;
    insight_level: number;
    willingness_level: number;
    handicraft_level: number;
    charm_level: number;
};
export type CharacterAbility = {
    date: string;
    ability_grade: string;
    ability_info: Array<{
        ability_no: string;
        ability_grade: string;
        ability_value: string;
    }>;
    remain_fame: number;
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
    base_equipment_level?: number;
};
export type EquipmentDetail = {
    item_equipment_part: string;
    equipment_slot: string;
    item_name: string;
    item_icon: string;
    item_description: string;
    item_shape_name: string;
    item_shape_icon: string;
    gender: string;
    item_total_option: EquipmentOption;
    item_base_option: EquipmentOption;
    equipment_level_increase: number;
    item_exceptional_option: EquipmentOption;
    item_add_option: EquipmentOption;
    growth_exp: number;
    growth_level: number;
    scroll_upgrade: string;
    cuttable_count: string;
    golden_hammer_flag: string;
    scroll_resilience_count: string;
    scroll_upgradeable_count: string;
    soul_name: string;
    soul_option: string;
    item_etc_option: EquipmentOption;
    starforce: string;
    starforce_scroll_flag: string;
    item_starforce_option: ItemStarforceOption;
    special_ring_level: number;
    date_expire: string;
};
export type ItemStarforceOption = {
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
};
export type CharacterCashItemEquipment = {
    date: string;
    character_gender: string;
    character_class: string;
    preset_no: number;
    cash_item_equipment_preset_1: CashItemEquipmentPreset[];
    cash_item_equipment_preset_2: CashItemEquipmentPreset[];
    cash_item_equipment_preset_3: CashItemEquipmentPreset[];
    additional_cash_item_equipment_preset_1: CashItemEquipmentPreset[];
    additional_cash_item_equipment_preset_2: CashItemEquipmentPreset[];
    additional_cash_item_equipment_preset_3: CashItemEquipmentPreset[];
};
export type CashItemEquipmentPreset = {
    cash_item_equipment_part: string;
    cash_item_equipment_slot: string;
    cash_item_name: string;
    cash_item_icon: string;
    cash_item_description: string;
    cash_item_option: CashItemOption[];
    date_expire: string;
    date_option_expire: string;
    cash_item_label: string;
    cash_item_coloring_prism: ColoringPrism;
    base_preset_item_disable_flag: string;
};
export type CashItemOption = {
    option_type: string;
    option_value: string;
};
export type ColoringPrism = {
    description: string;
    color_range: string;
    hue: number;
    saturation: number;
    value: number;
};
export type CharacterSymbolEquipment = {
    date: string;
    character_class: string;
    symbol: SymbolInfo[];
};
export type SymbolInfo = {
    symbol_name: string;
    symbol_icon: string;
    symbol_description: string;
    symbol_force: string;
    symbol_level: number;
    symbol_str: string;
    symbol_dex: string;
    symbol_int: string;
    symbol_luk: string;
    symbol_hp: string;
    symbol_growth_count: number;
    symbol_require_growth_count: number;
};
export type SetEffectInfo = {
    date: string;
    set_effect: Array<{
        set_name: string;
        total_set_count: number;
        set_effect_info: Array<{
            set_count: number;
            set_option: string;
        }>;
    }>;
};
export type CharacterBeautyEquipment = {
    date: string;
    character_gender: string;
    character_class: string;
    character_hair: CharacterHairFaceInfo;
    character_face: CharacterHairFaceInfo;
    character_skin_name: string;
    additional_character_hair: CharacterHairFaceInfo;
    additional_character_face: CharacterHairFaceInfo;
    additional_character_skin_name: string;
};
export type CharacterHairFaceInfo = {
    description: string;
    hair_name: string;
    base_color: string;
    mix_color: string;
    mix_rate: string;
};
export type CharacterAndroidEquipment = {
    date: string;
    android_name: string;
    android_nickname: string;
    android_icon: string;
    android_description: string;
    android_hair: AndroidHairFaceInfo;
    android_face: AndroidHairFaceInfo;
    android_skin_name: string;
    android_cash_item_equipment: AndroidCashItemEquipment[];
    android_ear_sensor_clip_flag: string;
};
export type AndroidHairFaceInfo = {
    description: string;
    hair_name: string;
    base_color: string;
    mix_color: string;
    mix_rate: string;
};
export type AndroidCashItemEquipment = {
    cash_item_equipment_part: string;
    cash_item_equipment_slot: string;
    cash_item_name: string;
    cash_item_icon: string;
    cash_item_description: string;
    cash_item_option: CashItemOption[];
    date_expire: string;
    date_option_expire: string;
    cash_item_label: string;
    cash_item_coloring_prism: ColoringPrism;
};
export type CharacterPetEquipment = {
    date: string;
    pet_1_name: string;
    pet_1_nickname: string;
    pet_1_icon: string;
    pet_1_description: string;
    pet_1_equipment: PetEquipmentInfo;
    pet_1_auto_skill: PetAutoSkill;
    pet_1_pet_type: string;
    pet_1_skill: string[];
    pet_1_date_expire: string;
    pet_2_name: string;
    pet_2_nickname: string;
    pet_2_icon: string;
    pet_2_description: string;
    pet_2_equipment: PetEquipmentInfo;
    pet_2_auto_skill: PetAutoSkill;
    pet_2_pet_type: string;
    pet_2_skill: string[];
    pet_2_date_expire: string;
    pet_3_name: string;
    pet_3_nickname: string;
    pet_3_icon: string;
    pet_3_description: string;
    pet_3_equipment: PetEquipmentInfo;
    pet_3_auto_skill: PetAutoSkill;
    pet_3_pet_type: string;
    pet_3_skill: string[];
    pet_3_date_expire: string;
};
export type PetEquipmentInfo = {
    description: string;
    item_name: string;
    item_icon: string;
    item_description: string;
    item_option: ItemOption[];
    scroll_upgrade: number;
    scroll_upgradeable: number;
};
export type PetAutoSkill = {
    description: string;
    skill_1: string;
    skill_1_icon: string;
    skill_2: string;
    skill_2_icon: string;
};
export type ItemOption = {
    option_type: string;
    option_value: string;
};
export type CharacterSkill = {
    date: string;
    character_class: string;
    character_skill_grade: string;
    character_skill: SkillInfo[];
};
export type SkillInfo = {
    skill_name: string;
    skill_description: string;
    skill_level: number;
    skill_effect: string;
    skill_icon: string;
};
export type CharacterLinkSkill = {
    date: string;
    character_class: string;
    character_link_skill: LinkSkillInfo;
    character_owned_link_skill: LinkSkillInfo;
};
export type LinkSkillInfo = {
    description: string;
    skill_name: string;
    skill_description: string;
    skill_level: number;
    skill_effect: string;
    skill_icon: string;
};
export type CharacterVMatrix = {
    date: string;
    character_class: string;
    character_v_core_equipment: VCoreInfo[];
    character_v_matrix_remain_slot_upgrade_point: number;
};
export type VCoreInfo = {
    slot_id: string;
    slot_level: number;
    v_core_name: string;
    v_core_type: string;
    v_core_level: number;
    v_core_skill_1: string;
    v_core_skill_2?: string;
    v_core_skill_3?: string;
};
export type CharacterHexaMatrix = {
    date: string;
    character_hexa_core_equipment: HexaCoreInfo[];
};
export type HexaCoreInfo = {
    hexa_core_name: string;
    hexa_core_level: number;
    hexa_core_type: string;
    linked_skill: HexaSkill[];
};
export type HexaSkill = {
    hexa_skill_id: string;
};
export type CharacterHexaMatrixStat = {
    date: string;
    character_class: string;
    character_hexa_stat_core: HexaStatCoreInfo[];
    preset_hexa_stat_core: HexaStatCoreInfo[];
};
export type HexaStatCoreInfo = {
    slot_id: string;
    main_stat_name: string;
    sub_stat_name_1: string;
    sub_stat_name_2: string;
    main_stat_level: number;
    sub_stat_level_1: number;
    sub_stat_level_2: number;
    stat_grade: number;
};
export type CharacterDojang = {
    date: string;
    character_class: string;
    world_name: string;
    dojang_best_floor: number;
    date_dojang_record: string;
    dojang_best_time: number;
};
export type ErrorMessage = {
    error: {
        name: string;
        message: string;
    };
};
export type Union = {
    date: string;
    union_level: number;
    union_grade: string;
};
export type UnionData = {
    date: string;
    union_raider_stat: string[];
    union_occupied_stat: string[];
    union_inner_stat: UnionInnerStat[];
    union_block: UnionBlock[];
};
export type UnionInnerStat = {
    stat_field_id: string;
    stat_field_effect: string;
};
export type UnionBlock = {
    block_type: string;
    block_class: string;
    block_level: string;
    block_control_point: BlockControlPoint;
    block_position: BlockPosition[];
};
export type BlockControlPoint = {
    description: string;
    x: number;
    y: number;
};
export type BlockPosition = {
    x: number;
    y: number;
};
export type Guild = {
    oguild_id: string;
};
export type GuildBasic = {
    date: string;
    world_name: string;
    guild_name: string;
    guild_level: number;
    guild_fame: number;
    guild_point: number;
    guild_master_name: string;
    guild_member_count: number;
    guild_member: string[];
    guild_skill: GuildSkill[];
    guild_nobless_skill: GuildSkill[];
    guild_mark: string;
    guild_mark_custom: string;
};
export type GuildSkill = {
    skill_name: string;
    skill_description: string;
    skill_level: number;
    skill_effect: string;
    skill_icon: string;
};
export type User = {
    ouid: string;
};
export type CubeHistory = {
    count: number;
    next_cursor: string;
    cube_history: CubeHistoryEntry[];
};
export type CubeHistoryEntry = {
    id: string;
    character_name: string;
    date_create: string;
    cube_type: string;
    item_upgrade_result: string;
    miracle_time_flag: string;
    item_equipment_part: string;
    item_level: number;
    target_item: string;
    potential_option_grade: string;
    additional_potential_option_grade: string;
    upgrade_guarantee: boolean;
    upgrade_guarantee_count: number;
    before_potential_option: PotentialOption[];
    before_additional_potential_option: PotentialOption[];
    after_potential_option: PotentialOption[];
    after_additional_potential_option: PotentialOption[];
};
export type PotentialOption = {
    value: string;
    grade: string;
};
export type OverallRanking = {
    ranking: OverallRankingEntry[];
};
export type OverallRankingEntry = {
    date: string;
    ranking: number;
    character_name: string;
    world_name: string;
    class_name: string;
    sub_class_name: string;
    character_level: number;
    character_exp: number;
    character_popularity: number;
    character_guildname: string;
};
export type UnionRanking = {
    ranking: UnionRankingEntry[];
};
export type UnionRankingEntry = {
    date: string;
    ranking: number;
    character_name: string;
    world_name: string;
    class_name: string;
    sub_class_name: string;
    union_level: number;
    union_power: number;
};
export type GuildRanking = {
    ranking: GuildRankingEntry[];
};
export type GuildRankingEntry = {
    date: string;
    ranking: number;
    guild_name: string;
    world_name: string;
    guild_level: number;
    guild_master_name: string;
    guild_mark: string;
    guild_point: number;
};
export type DojangRanking = {
    ranking: DojangRankingEntry[];
};
export type DojangRankingEntry = {
    date: string;
    ranking: number;
    character_name: string;
    world_name: string;
    class_name: string;
    sub_class_name: string;
    character_level: number;
    dojang_floor: number;
    dojang_time_record: number;
};
export type TheSeedRanking = {
    ranking: TheSeedRankingEntry[];
};
export type TheSeedRankingEntry = {
    date: string;
    ranking: number;
    character_name: string;
    world_name: string;
    class_name: string;
    sub_class_name: string;
    character_level: number;
    theseed_floor: number;
    theseed_time_record: number;
};
export type AchievementRanking = {
    ranking: AchievementRankingEntry[];
};
export type AchievementRankingEntry = {
    date: string;
    ranking: number;
    character_name: string;
    world_name: string;
    class_name: string;
    sub_class_name: string;
    trophy_grade: string;
    trophy_score: number;
};
