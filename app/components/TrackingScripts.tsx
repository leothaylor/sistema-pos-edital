import Script from "next/script";
import { trackingConfig } from "../config/tracking";

const { googleAnalyticsMeasurementId, microsoftClarityProjectId } = trackingConfig;

export function TrackingScripts() {
  return (
    <>
      <Script id="ga4-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${googleAnalyticsMeasurementId}');
        `}
      </Script>
      <Script
        id="ga4-library"
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsMeasurementId}`}
        strategy="afterInteractive"
      />
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${microsoftClarityProjectId}");
        `}
      </Script>
    </>
  );
}
