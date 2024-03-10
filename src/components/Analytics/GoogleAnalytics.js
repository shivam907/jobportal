import Script from "next/script";

const GoogleAnalytics = ({ ga_id }) => (
  <>
    <Script
      async
      src={`https://www.googletagmanager.com/gtag/js? 
      id=${ga_id}`}
    ></Script>
    <Script
      id="google-analytics"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
            gtag('consent', 'update', {
          'ad_user_data': 'granted',
          'ad_personalization': 'granted',
          'ad_storage': 'granted',
          'analytics_storage': 'granted'
        });    
        gtag('consent', 'update', {
      'ad_storage': 'granted'
    });
          gtag('config', '${ga_id}');
        `,
      }}
    ></Script>
  </>
);
export default GoogleAnalytics;