# AI Prompt Testing Guide

## Repository Setup Complete! 🎉

We've successfully created a test repository with real PRs to validate our AI prompt:

**Repository**: https://github.com/lucascezimbracorrea/pr-ai-reviewer

## Test PRs Created

### 1. **Problematic Implementation PR**
**Branch**: `test/accessibility-issues`  
**PR Link**: https://github.com/lucascezimbracorrea/pr-ai-reviewer/pull/new/test/accessibility-issues

**Issues to Test:**
- ❌ **Accessibility**: Button component uses `div` instead of `button` element
- ❌ **Performance**: Chart component imports multiple heavy libraries (d3, plotly, chart.js)
- ❌ **Next.js**: Dashboard uses unnecessary `'use client'` directive
- ❌ **Security**: UserProfile exposes API key and uses `dangerouslySetInnerHTML`

### 2. **Good Implementation PR**
**Branch**: `test/good-implementation`  
**PR Link**: https://github.com/lucascezimbracorrea/pr-ai-reviewer/pull/new/test/good-implementation

**Best Practices to Validate:**
- ✅ **Accessibility**: Proper semantic button with keyboard support
- ✅ **Performance**: Dynamic imports and optimized bundle
- ✅ **Next.js**: Server-side rendering with proper App Router patterns
- ✅ **Security**: No exposed secrets, safe HTML rendering

## How to Test the AI Prompt

### Step 1: Create the PRs
1. Visit the PR links above
2. Create pull requests for both branches
3. Use descriptive titles like:
   - "Test: Frontend components with common issues"
   - "Test: Optimized frontend components following best practices"

### Step 2: Apply the AI Prompt
Copy the AI prompt from our research document and use it with your preferred AI tool (GPT-4, Claude, etc.) to review each PR.

### Step 3: Compare Results
- **Problematic PR**: Should identify 4+ critical issues
- **Good PR**: Should pass most checks with minimal concerns

## Expected Results

### For the Problematic PR:
The AI should identify:
- **BLOCKERS**: Security issues (exposed API key, unsafe HTML)
- **CONCERNS**: Accessibility violations, performance issues
- **Performance Impact**: Bundle size increase, hydration time impact

### For the Good PR:
The AI should identify:
- **PASS**: Most items should meet standards
- **CONCERNS**: Minimal issues (if any)
- **Performance Impact**: Positive or neutral impact

## Testing Checklist

- [ ] Create both PRs on GitHub
- [ ] Apply AI prompt to problematic PR
- [ ] Apply AI prompt to good PR
- [ ] Document results and accuracy
- [ ] Note any false positives/negatives
- [ ] Measure review time and quality
- [ ] Refine prompt based on results

## Next Steps

1. **Create the PRs** using the links above
2. **Test with real AI models** (GPT-4, Claude, etc.)
3. **Document results** in this file
4. **Refine the prompt** based on real-world performance
5. **Share findings** with the team

## Repository Structure

```
pr-ai-reviewer/
├── README.md
├── Technology Research: Front End PR Review.md
├── test-scenarios.md
├── prompt-test-results.md
├── AI_PROMPT_TEST.md
├── package.json
├── components/
│   ├── Button.tsx
│   ├── Chart.tsx
│   └── UserProfile.tsx
└── app/
    └── dashboard/
        └── page.tsx
```

## Ready for Real Testing! 🚀

The repository is now set up with realistic frontend code that contains the exact issues our AI prompt is designed to catch. This will provide much more accurate validation than simulated scenarios.
