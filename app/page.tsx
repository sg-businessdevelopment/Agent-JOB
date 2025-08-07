// ./ux-lab/page.tsx からデフォルトエクスポートされているコンポーネントをインポートします。
// もし名前付きエクスポートの場合は、 import { ComponentName } from './ux-lab/page'; のように変更してください。
import HomePage from "./ux-lab/page"

/**
 * ルートURL ("/") にアクセスした際に表示されるメインページです。
 * 実際の表示内容は HomePage コンポーネントに委ねます。
 */
export default function Page() {
  // HomePageコンポーネントを呼び出して、その内容をそのまま表示します。
  return <HomePage />
}
