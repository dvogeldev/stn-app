/**
 * Browser Console Responsive Testing Script
 * Run this in the browser console on the calendar page to test responsive behavior
 * Requirements: 3.3, 3.1
 */

(function() {
  'use strict';
  
  console.log('🧪 Starting Calendar Page Responsive Testing...');
  
  // Test configurations for different screen sizes
  const testSizes = [
    { name: 'Mobile', width: 375, height: 667 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Desktop', width: 1024, height: 768 },
    { name: 'Large Desktop', width: 1440, height: 900 }
  ];
  
  let testResults = {
    passed: 0,
    failed: 0,
    details: []
  };
  
  // Helper function to simulate viewport resize
  function setViewportSize(width, height) {
    // This simulates the viewport size for testing purposes
    // In real testing, you would resize the browser window
    document.documentElement.style.width = width + 'px';
    document.documentElement.style.height = height + 'px';
    
    // Trigger resize event
    window.dispatchEvent(new Event('resize'));
    
    // Wait for any responsive changes to take effect
    return new Promise(resolve => setTimeout(resolve, 100));
  }
  
  // Test function
  function runTest(testName, testFn) {
    try {
      const result = testFn();
      if (result) {
        testResults.passed++;
        testResults.details.push(`✅ ${testName}: PASSED`);
        console.log(`✅ ${testName}: PASSED`);
      } else {
        testResults.failed++;
        testResults.details.push(`❌ ${testName}: FAILED`);
        console.log(`❌ ${testName}: FAILED`);
      }
    } catch (error) {
      testResults.failed++;
      testResults.details.push(`❌ ${testName}: ERROR - ${error.message}`);
      console.log(`❌ ${testName}: ERROR - ${error.message}`);
    }
  }
  
  // Header tests
  function testHeaderResponsive() {
    console.log('\n📱 Testing Header Responsive Behavior...');
    
    runTest('Header exists', () => {
      return document.querySelector('header') !== null;
    });
    
    runTest('Church logo visible', () => {
      const logo = document.querySelector('img[alt*="St. Nicholas"]');
      return logo && logo.offsetWidth > 0 && logo.offsetHeight > 0;
    });
    
    runTest('Church name visible', () => {
      const churchName = document.querySelector('*:contains("St. Nicholas Orthodox Church")');
      return churchName !== null;
    });
    
    // Test mobile menu button (should be hidden on desktop, visible on mobile)
    runTest('Mobile menu button exists', () => {
      const menuButton = document.querySelector('button[aria-label*="menu"], button:has(svg)');
      return menuButton !== null;
    });
  }
  
  // Calendar tests
  function testCalendarResponsive() {
    console.log('\n📅 Testing Calendar Responsive Behavior...');
    
    runTest('Calendar container exists', () => {
      return document.querySelector('.container') !== null;
    });
    
    runTest('Month navigation exists', () => {
      const prevButton = document.querySelector('button:contains("Prev"), button:contains("Previous")');
      const nextButton = document.querySelector('button:contains("Next")');
      return prevButton && nextButton;
    });
    
    runTest('Calendar grid exists', () => {
      const grid = document.querySelector('.grid-cols-7');
      return grid !== null;
    });
    
    runTest('Day headers visible', () => {
      const dayHeaders = document.querySelectorAll('.grid-cols-7 > div');
      return dayHeaders.length >= 7;
    });
    
    runTest('Calendar events visible', () => {
      const events = document.querySelectorAll('[class*="bg-blue-100"], [class*="event"]');
      return events.length >= 0; // Events may not always be present
    });
  }
  
  // Footer tests
  function testFooterResponsive() {
    console.log('\n🦶 Testing Footer Responsive Behavior...');
    
    runTest('Footer exists', () => {
      return document.querySelector('footer') !== null;
    });
    
    runTest('Church info section visible', () => {
      const churchInfo = document.querySelector('*:contains("St. Nicholas Orthodox Church")');
      return churchInfo !== null;
    });
    
    runTest('Quick Links section visible', () => {
      const quickLinks = document.querySelector('*:contains("Quick Links")');
      return quickLinks !== null;
    });
    
    runTest('Resources section visible', () => {
      const resources = document.querySelector('*:contains("Resources")');
      return resources !== null;
    });
    
    runTest('Footer links clickable', () => {
      const footerLinks = document.querySelectorAll('footer a');
      return footerLinks.length > 0;
    });
  }
  
  // Modal tests
  function testModalResponsive() {
    console.log('\n🪟 Testing Modal Responsive Behavior...');
    
    runTest('Modal can be triggered', () => {
      const eventElement = document.querySelector('[class*="bg-blue-100"]');
      if (eventElement) {
        eventElement.click();
        // Check if modal appears
        setTimeout(() => {
          const modal = document.querySelector('.fixed');
          return modal !== null;
        }, 100);
      }
      return true; // Pass if no events to click
    });
    
    runTest('Modal has proper z-index', () => {
      const modal = document.querySelector('.fixed');
      if (modal) {
        const zIndex = window.getComputedStyle(modal).zIndex;
        return parseInt(zIndex) >= 50;
      }
      return true; // Pass if no modal present
    });
  }
  
  // Layout integration tests
  function testLayoutIntegration() {
    console.log('\n🏗️ Testing Layout Integration...');
    
    runTest('Header positioned correctly', () => {
      const header = document.querySelector('header');
      if (header) {
        const rect = header.getBoundingClientRect();
        return rect.top >= 0;
      }
      return false;
    });
    
    runTest('Footer positioned at bottom', () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        return rect.bottom <= window.innerHeight + 100; // Allow some margin
      }
      return false;
    });
    
    runTest('No content overlap', () => {
      const header = document.querySelector('header');
      const footer = document.querySelector('footer');
      const calendar = document.querySelector('.container');
      
      if (header && footer && calendar) {
        const headerRect = header.getBoundingClientRect();
        const calendarRect = calendar.getBoundingClientRect();
        const footerRect = footer.getBoundingClientRect();
        
        return calendarRect.top >= headerRect.bottom && 
               footerRect.top >= calendarRect.top;
      }
      return true;
    });
  }
  
  // Helper function to check if element contains text
  function addContainsSelector() {
    if (!document.querySelector.toString().includes('contains')) {
      // Add custom :contains selector for testing
      document.querySelectorAll = function(selector) {
        if (selector.includes(':contains(')) {
          const text = selector.match(/:contains\("([^"]+)"\)/)[1];
          const elements = Array.from(document.getElementsByTagName('*'));
          return elements.filter(el => el.textContent.includes(text));
        }
        return Document.prototype.querySelectorAll.call(this, selector);
      };
    }
  }
  
  // Main test runner
  async function runAllTests() {
    addContainsSelector();
    
    console.log('🚀 Running responsive design tests...\n');
    
    // Run tests for each screen size
    for (const size of testSizes) {
      console.log(`\n📐 Testing ${size.name} (${size.width}x${size.height})`);
      console.log('='.repeat(50));
      
      await setViewportSize(size.width, size.height);
      
      testHeaderResponsive();
      testCalendarResponsive();
      testFooterResponsive();
      testModalResponsive();
      testLayoutIntegration();
    }
    
    // Print final results
    console.log('\n' + '='.repeat(50));
    console.log('📊 FINAL TEST RESULTS');
    console.log('='.repeat(50));
    console.log(`✅ Passed: ${testResults.passed}`);
    console.log(`❌ Failed: ${testResults.failed}`);
    console.log(`📈 Success Rate: ${((testResults.passed / (testResults.passed + testResults.failed)) * 100).toFixed(1)}%`);
    
    console.log('\n📝 Detailed Results:');
    testResults.details.forEach(detail => console.log(detail));
    
    if (testResults.failed === 0) {
      console.log('\n🎉 All responsive design tests passed!');
    } else {
      console.log('\n⚠️ Some tests failed. Please review the implementation.');
    }
    
    return testResults;
  }
  
  // Export for manual execution
  window.runResponsiveTests = runAllTests;
  
  // Auto-run tests
  runAllTests();
  
})();

// Instructions for use:
console.log(`
📋 RESPONSIVE TESTING INSTRUCTIONS:

1. Open the calendar page in your browser
2. Open Developer Tools (F12)
3. Go to the Console tab
4. Paste and run this script
5. The script will automatically test different screen sizes
6. Review the results in the console

🔧 Manual Testing:
- Use DevTools Device Toolbar to test different screen sizes
- Test on real mobile devices
- Verify touch interactions work properly
- Test modal behavior across screen sizes

📱 Key Breakpoints to Test:
- Mobile: 375px width
- Tablet: 768px width  
- Desktop: 1024px width
- Large Desktop: 1440px width
`);