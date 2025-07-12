// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: { [key: string]: number } = {};
  
  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Measure page load performance
  public measurePageLoad(): void {
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        this.metrics = {
          dns: perfData.domainLookupEnd - perfData.domainLookupStart,
          tcp: perfData.connectEnd - perfData.connectStart,
          ssl: perfData.secureConnectionStart > 0 ? perfData.connectEnd - perfData.secureConnectionStart : 0,
          ttfb: perfData.responseStart - perfData.requestStart,
          download: perfData.responseEnd - perfData.responseStart,
          domInteractive: perfData.domInteractive,
          domComplete: perfData.domComplete,
          loadComplete: perfData.loadEventEnd,
          fcp: this.getFCP(),
          lcp: 0, // Will be updated asynchronously
          cls: 0, // Will be updated asynchronously
          fid: 0  // Will be updated asynchronously
        };

        this.getLCP();
        this.getCLS();
        this.getFID();

        console.group('🚀 Performance Metrics');
        console.log('DNS Lookup:', this.metrics.dns.toFixed(2) + 'ms');
        console.log('TCP Connection:', this.metrics.tcp.toFixed(2) + 'ms');
        console.log('SSL Handshake:', this.metrics.ssl.toFixed(2) + 'ms');
        console.log('Time to First Byte:', this.metrics.ttfb.toFixed(2) + 'ms');
        console.log('Download Time:', this.metrics.download.toFixed(2) + 'ms');
        console.log('DOM Interactive:', this.metrics.domInteractive.toFixed(2) + 'ms');
        console.log('DOM Complete:', this.metrics.domComplete.toFixed(2) + 'ms');
        console.log('Load Complete:', this.metrics.loadComplete.toFixed(2) + 'ms');
        console.log('First Contentful Paint:', this.metrics.fcp.toFixed(2) + 'ms');
        console.groupEnd();
      });
    }
  }

  // Get First Contentful Paint
  private getFCP(): number {
    const entries = performance.getEntriesByType('paint');
    const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
    return fcpEntry ? fcpEntry.startTime : 0;
  }

  // Get Largest Contentful Paint
  private getLCP(): void {
    if ('PerformanceObserver' in window) {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = lastEntry.startTime;
        console.log('Largest Contentful Paint:', this.metrics.lcp.toFixed(2) + 'ms');
      }).observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }

  // Get Cumulative Layout Shift
  private getCLS(): void {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          const layoutShiftEntry = entry as PerformanceEntry & {
            hadRecentInput?: boolean;
            value?: number;
          };
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value || 0;
          }
        }
        this.metrics.cls = clsValue;
        console.log('Cumulative Layout Shift:', this.metrics.cls.toFixed(3));
      }).observe({ entryTypes: ['layout-shift'] });
    }
  }

  // Get First Input Delay
  private getFID(): void {
    if ('PerformanceObserver' in window) {
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          const fidEntry = entry as PerformanceEntry & {
            processingStart?: number;
          };
          this.metrics.fid = (fidEntry.processingStart || 0) - entry.startTime;
          console.log('First Input Delay:', this.metrics.fid.toFixed(2) + 'ms');
        }
      }).observe({ entryTypes: ['first-input'] });
    }
  }

  // Monitor resource loading
  public monitorResources(): void {
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const resources = performance.getEntriesByType('resource');
        
        console.group('📦 Resource Loading Times');
        resources.forEach((resource) => {
          const resourceTiming = resource as PerformanceResourceTiming;
          const loadTime = resourceTiming.responseEnd - resourceTiming.startTime;
          if (loadTime > 100) { // Only log slow resources
            console.log(`${resource.name}: ${loadTime.toFixed(2)}ms`);
          }
        });
        console.groupEnd();
      });
    }
  }

  // Get metrics
  public getMetrics(): { [key: string]: number } {
    return this.metrics;
  }
}
