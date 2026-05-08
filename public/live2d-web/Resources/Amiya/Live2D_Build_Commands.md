# Live2D Amiya 模型 Build 指令清單

所有檔案與設定都已處理完畢，以下指令請在 **Windows PowerShell** 執行。

---

## 已完成的前置作業

- 模型檔已放在 `E:\SODAARTS_Classes\CubismSdkForWeb-5-r.5\Samples\Resources\Amiya\`
- `Amiya.model3.json` 已補上 `Motions`（Idle/TapBody）與 `HitAreas` 區塊
- `Samples\TypeScript\Demo\src\lappdefine.ts` 的 `ModelDir` 已設為 `['Amiya']`
- node_modules 已安裝（你之前裝好的）

---

## 1. 本地測試

```powershell
cd E:\SODAARTS_Classes\CubismSdkForWeb-5-r.5\Samples\TypeScript\Demo
npm run start
```

瀏覽器開 `http://localhost:5000` 看到模型即成功。
點擊角色身體會隨機播放 wave / angry_sign / surprise_sign。

---

## 2. 出 Production 靜態檔

```powershell
cd E:\SODAARTS_Classes\CubismSdkForWeb-5-r.5\Samples\TypeScript\Demo
npm run build:prod
```

> SDK r5 的 build 腳本：
> - `npm run build` → 帶 source map 的 development build（檔案大但好除錯）
> - `npm run build:prod` → 壓縮過的 production build（要部署用這個）

輸出位置：`E:\SODAARTS_Classes\CubismSdkForWeb-5-r.5\Samples\TypeScript\Demo\dist\`

dist 內容：
```
dist/
├─ index.html
├─ assets/        ← bundle.js / css
├─ Core/          ← Live2DCubismCore.js
├─ Framework/     ← Shaders
└─ Resources/
   └─ Amiya/      ← 你的模型
```

把整個 `dist/` 上傳到任何靜態網站空間（GitHub Pages / Netlify / Vercel / 自架 server）即可。

---

## 3. 本地預覽 production build

```powershell
cd E:\SODAARTS_Classes\CubismSdkForWeb-5-r.5\Samples\TypeScript\Demo
npm run serve
```

預設 port 5000。用來確認 build 出來的檔案在 production 模式下還能跑。

---

## 4. 清理沙箱建立的暫存檔（建議手動刪掉）

我在沙箱測試時不小心留下兩個空檔（無法從沙箱刪除），請你手動刪：

```powershell
Remove-Item "E:\SODAARTS_Classes\CubismSdkForWeb-5-r.5\Samples\TypeScript\Demo\public\test_write.tmp"
Remove-Item "E:\SODAARTS_Classes\CubismSdkForWeb-5-r.5\Samples\TypeScript\Demo\public\Resources\Amiya\Amiya.model3.json.tmp"
```

---

## 常見錯誤排查

| 症狀 | 原因 / 解法 |
|---|---|
| 模型不出現、白畫面 | 開 F12 看 Console，多半是路徑大小寫不一致或 model3.json 內檔名拼錯 |
| 動作不播放 | 檢查 `Amiya.model3.json` 的 `Motions` 區塊是否在 |
| `npm run start` 卡住 | 試試 `npm run serve`，或刪掉 `dist/` 再重來 |
| build 後上傳網站 404 | 靜態主機要把根目錄指到 `dist/`，或在 `vite.config.mts` 把 `base` 改成你的子路徑 |
| 想嵌入到自家網頁（不要範例 UI） | 需自己用 Cubism Framework 寫 loader，建議先跑通 Demo 再參考 `lappmodel.ts` 改 |
