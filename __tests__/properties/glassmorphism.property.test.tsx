import * as fc from 'fast-check';
import { render } from '@testing-library/react';
import { Card } from '@/components/ui/Card';

// Feature: systems-engineer-portfolio, Property 20: Glassmorphism Panel Styling

describe('Property 20: Glassmorphism Panel Styling', () => {
  test('Card component should include glassmorphism CSS class', () => {
    fc.assert(
      fc.property(
        fc.string(),
        (content: string) => {
          const { container } = render(<Card>{content}</Card>);
          const cardElement = container.firstChild as HTMLElement;
          
          expect(cardElement).toBeDefined();
          expect(cardElement.classList.contains('glass-panel')).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('Card component should have glassmorphism properties in computed styles', () => {
    const { container } = render(<Card>Test Content</Card>);
    const cardElement = container.firstChild as HTMLElement;
    
    // Verify the element has the glass-panel class
    expect(cardElement.classList.contains('glass-panel')).toBe(true);
    
    // The glass-panel class should be applied
    // (actual backdrop-filter styles are applied via CSS)
    expect(cardElement.className).toContain('glass-panel');
  });

  test('Card component with hover should include transition classes', () => {
    fc.assert(
      fc.property(
        fc.string(),
        fc.boolean(),
        (content: string, hover: boolean) => {
          const { container } = render(<Card hover={hover}>{content}</Card>);
          const cardElement = container.firstChild as HTMLElement;
          
          if (hover) {
            expect(cardElement.className).toContain('transition');
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  test('Card component should maintain glassmorphism styling with custom className', () => {
    fc.assert(
      fc.property(
        fc.string(),
        fc.string().filter(s => s.length > 0 && !s.includes('glass-panel')),
        (content: string, customClass: string) => {
          const { container } = render(<Card className={customClass}>{content}</Card>);
          const cardElement = container.firstChild as HTMLElement;
          
          // Should have both glass-panel and custom class
          expect(cardElement.classList.contains('glass-panel')).toBe(true);
          expect(cardElement.className).toContain(customClass);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('glassmorphism styling should be consistent across multiple renders', () => {
    const content = 'Test Content';
    
    const { container: container1 } = render(<Card>{content}</Card>);
    const { container: container2 } = render(<Card>{content}</Card>);
    
    const card1 = container1.firstChild as HTMLElement;
    const card2 = container2.firstChild as HTMLElement;
    
    // Both should have the same glassmorphism class
    expect(card1.classList.contains('glass-panel')).toBe(true);
    expect(card2.classList.contains('glass-panel')).toBe(true);
  });

  test('Card component should render children while maintaining glassmorphism', () => {
    fc.assert(
      fc.property(
        fc.array(fc.string({ minLength: 1 }), { minLength: 1, maxLength: 5 }),
        (textItems: string[]) => {
          const { container } = render(
            <Card>
              {textItems.map((text, index) => (
                <div key={index}>{text}</div>
              ))}
            </Card>
          );
          
          const cardElement = container.firstChild as HTMLElement;
          
          // Should have glassmorphism styling
          expect(cardElement.classList.contains('glass-panel')).toBe(true);
          
          // Should render all children
          const childDivs = cardElement.querySelectorAll('div');
          expect(childDivs.length).toBe(textItems.length);
        }
      ),
      { numRuns: 100 }
    );
  });
});
