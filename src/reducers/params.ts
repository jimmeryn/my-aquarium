let dataFromJson: NormalizedObject<Param>;
try {
  dataFromJson = normalize(require("../store/data.json")).params;
} catch (e) {
  dataFromJson = { byId: {}, allIds: [] };
}
