const { Model, DataTypes } = require(`sequelize`);
const sequelize = require(`../config/connection`);

class Character extends Model {}

Character.init(
    {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
        },
        ownerId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: `user`,
                key: `id`
            }
        },
        xp: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `0`,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        species: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: `Human`
        },
        archetype:{
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: `Unaligned Rascal`
        },
        tier:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '2',
        },
        rank:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `0`,
        },
        homeworld: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        strength:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `1`,
        },
        toughness:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `1`,
        },
        agility:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `1`,
        },
        initiative:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `1`,
        },
        willpower:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `1`,
        },
        intellect:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `1`,
        },
        fellowship:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `1`,
        },
        athletics:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `0`,
        },
        awareness:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `0`,
        },
        ballisticSkill:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `0`,
        },
        cunning:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `0`,
        },
        deception:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `0`,
        },
        insight:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `0`,
        },
        intimidation:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `0`,
        },
        investigation:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `0`,
        },
        leadership:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `0`,
        },
        medicae:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `0`,
        },
        persuasion:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `0`,
        },
        pilot:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `0`,
        },
        psychicMastery:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `0`,
        },
        scholar:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `0`,
        },
        stealth:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `0`,
        },
        stealth:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `0`,
        },
        survival:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `0`,
        },
        tech:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `0`,
        },
        weaponSkill:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `0`,
        },
        corruption:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `0`,
        },
        influence:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `0`,
        },
        wealth:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: `0`,
        },
        languages:{
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: ``,
        },
        keywords:{
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: ``,
        },
        weapons:{
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: ``,
        },
        wargear:{
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: ``,
        },
        abilities:{
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: ``,
        },
    },
    {
        hooks: {

        },
        sequelize,
        timestamp: false,
        freezeTableName: true,
        underscored: true,
        modelName: `character`,
    }
);

module.exports = Character;