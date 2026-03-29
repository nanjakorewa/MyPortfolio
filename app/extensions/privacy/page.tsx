import Link from 'next/link'

export default function ExtensionPrivacyPage() {
  return (
    <section className="max-w-2xl">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="text-[--color-muted] mt-2">
        本プライバシーポリシーは、nanjakorewa が提供する Chrome
        拡張機能（以下「本拡張機能」）における個人情報の取り扱いについて定めるものです。
      </p>

      <div className="mt-8 space-y-8 text-[--color-ink]/90 text-sm leading-relaxed">
        <div>
          <h2 className="text-lg font-bold mb-2">1. 収集する情報</h2>
          <p>
            本拡張機能は、機能の提供に必要な最小限の情報のみを取り扱います。
            個人を特定できる情報（氏名、メールアドレス等）を収集することはありません。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">2. データの保存</h2>
          <p>
            本拡張機能が保存するデータは、すべてユーザーのローカル環境（ブラウザのストレージ）に保存されます。
            外部サーバーへデータを送信することはありません。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">3. 第三者への提供</h2>
          <p>
            本拡張機能は、ユーザーの情報を第三者に提供、販売、共有することはありません。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">4. 外部サービスとの通信</h2>
          <p>
            本拡張機能が外部サービスと通信を行う場合、その目的は機能の提供に限定されます。
            通信内容に個人情報は含まれません。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">5. 権限について</h2>
          <p>
            本拡張機能が要求するブラウザ権限は、機能の実現に必要な最小限のものです。
            要求する権限の詳細は、各拡張機能のストアページに記載しています。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">6. ポリシーの変更</h2>
          <p>
            本ポリシーは予告なく変更される場合があります。
            変更後のポリシーは本ページに掲載した時点で効力を生じます。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">7. お問い合わせ</h2>
          <p>
            本ポリシーに関するお問い合わせは、
            <Link href="/extensions/contact" className="a-like">
              拡張機能お問い合わせページ
            </Link>
            よりご連絡ください。
          </p>
        </div>

        <p className="text-[--color-muted] text-xs pt-4 border-t border-[--color-line]/30">
          最終更新日: 2026年3月29日
        </p>
      </div>

      <div className="mt-10">
        <Link href="/extensions" className="text-sm text-[--color-accent] hover:underline underline-offset-4 font-medium">
          ← Chrome Extensions に戻る
        </Link>
      </div>
    </section>
  )
}
