# Development Guide

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm, yarn, or pnpm
- MongoDB (local or cloud)
- Git

### Quick Setup
```bash
# Clone and install
git clone <repository-url>
cd muhscience-tech-labs-website
npm install

# Environment setup
cp .env.example .env
# Edit .env with your actual values

# Start development server
npm run dev
```

## 🛠 Development Workflow

### Code Quality Standards

#### Pre-commit Checklist
```bash
npm run pre-commit  # Runs type-check, lint, and format:check
```

#### Individual Commands
```bash
npm run type-check    # TypeScript type checking
npm run lint         # ESLint with error reporting
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

### File Structure Guidelines

```
/
├── app/                   # Next.js App Router pages
│   ├── api/              # API routes
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/           # Reusable components
│   ├── ui/              # Base UI components
│   ├── error-boundary.tsx
│   └── ...
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and configurations
│   ├── constants.ts     # App constants
│   ├── env.ts          # Environment validation
│   ├── mongodb.ts      # Database connection
│   └── utils.ts        # Helper utilities
├── models/             # Database models
├── types/              # TypeScript type definitions
└── public/             # Static assets
```

## 📝 Coding Standards

### TypeScript
- Use strict TypeScript configuration
- Define interfaces for all data structures
- Use proper type annotations
- Avoid `any` type - use `unknown` instead

### React Components
```tsx
// ✅ Good: Proper typing and structure
interface UserCardProps {
  user: User;
  onClick?: (user: User) => void;
  className?: string;
}

export function UserCard({ user, onClick, className }: UserCardProps) {
  return (
    <div className={cn('card', className)}>
      {/* Component content */}
    </div>
  );
}

// ❌ Bad: No typing, poor structure
export function UserCard(props) {
  return <div>{props.user.name}</div>;
}
```

### Error Handling
```tsx
// ✅ Good: Proper error handling
try {
  const result = await apiCall();
  return result;
} catch (error) {
  console.error('API call failed:', error);
  handleError(error, 'Failed to fetch data');
  throw error;
}

// ❌ Bad: Silent failures
try {
  const result = await apiCall();
  return result;
} catch {
  // Silent failure
}
```

### Constants Usage
```tsx
// ✅ Good: Use constants
import { VALIDATION } from '@/lib/constants';

const schema = z.string().max(VALIDATION.NAME_MAX_LENGTH);

// ❌ Bad: Magic numbers
const schema = z.string().max(50);
```

## 🔧 Component Development

### UI Component Guidelines
1. Use shadcn/ui components as base
2. Extend with proper TypeScript interfaces
3. Include proper error states and loading states
4. Add accessibility attributes
5. Use consistent styling patterns

### Custom Hooks
```tsx
// Example: Custom hook structure
export function useApi<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { handleError } = useErrorHandler();

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(endpoint);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      const result = await response.json();
      setData(result);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error');
      setError(error);
      handleError(error);
    } finally {
      setLoading(false);
    }
  }, [endpoint, handleError]);

  return { data, loading, error, refetch: fetchData };
}
```

## 🗄 Database Development

### Model Structure
```typescript
// Use proper interfaces
interface IUser extends Document {
  name: string;
  email: string;
  role: 'admin' | 'user';
}

// Add validation
const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    maxlength: [VALIDATION.NAME_MAX_LENGTH, 'Name too long'],
    trim: true,
  },
  // ... other fields
});

// Add indexes for performance
UserSchema.index({ email: 1 }, { unique: true });
UserSchema.index({ createdAt: -1 });
```

### API Route Structure
```typescript
export async function POST(request: Request): Promise<NextResponse> {
  try {
    // 1. Validate input
    const body = await request.json();
    const validatedData = schema.parse(body);

    // 2. Connect to database
    await connectDB();

    // 3. Perform operation
    const result = await Model.create(validatedData);

    // 4. Return success response
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    // 5. Handle errors appropriately
    return handleApiError(error);
  }
}
```

## 🎨 Styling Guidelines

### Tailwind CSS Best Practices
1. Use consistent spacing scale
2. Prefer utility classes over custom CSS
3. Use responsive design patterns
4. Implement proper dark mode support

### Component Styling
```tsx
// ✅ Good: Consistent class organization
<div className={cn(
  // Layout
  'flex items-center justify-between',
  // Spacing
  'px-4 py-2 space-x-2',
  // Styling
  'bg-background border rounded-lg',
  // States
  'hover:bg-accent transition-colors',
  // Responsive
  'md:px-6 md:py-3',
  // Custom
  className
)}>
  {children}
</div>
```

## 🧪 Testing Strategy

### Component Testing (Future Implementation)
```typescript
// Example test structure
describe('UserCard', () => {
  it('renders user information correctly', () => {
    const user = { name: 'John Doe', email: 'john@example.com' };
    render(<UserCard user={user} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    const user = { name: 'John Doe', email: 'john@example.com' };
    render(<UserCard user={user} onClick={handleClick} />);
    
    fireEvent.click(screen.getByText('John Doe'));
    expect(handleClick).toHaveBeenCalledWith(user);
  });
});
```

## 🚀 Performance Guidelines

### Code Splitting
```tsx
// Dynamic imports for large components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Loading />,
  ssr: false,
});
```

### Image Optimization
```tsx
// Use Next.js Image component
import Image from 'next/image';

<Image
  src="/images/hero.jpg"
  alt="Hero image"
  width={1200}
  height={600}
  priority
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### Bundle Analysis
```bash
npm run analyze  # Analyze bundle size
```

## 🔒 Security Guidelines

### Input Validation
- Always validate user input with Zod schemas
- Sanitize data before database operations
- Use parameterized queries (Mongoose handles this)

### Environment Variables
- Never commit sensitive data
- Use environment validation
- Rotate secrets regularly

### API Security
- Implement rate limiting
- Use HTTPS in production
- Validate request origins
- Implement proper authentication

## 📦 Deployment

### Build Process
```bash
npm run build    # Production build
npm run start    # Start production server
```

### Environment Variables
Required for production:
- `MONGODB_URI`
- `JWT_SECRET`
- `NEXT_PUBLIC_SITE_URL`

### Health Checks
- Database connectivity
- API endpoints
- Static asset loading

## 🐛 Debugging

### Development Tools
- React Developer Tools
- Redux DevTools (if using Redux)
- Network tab for API debugging
- Console for error tracking

### Common Issues
1. **Hydration errors**: Check for client-side only code
2. **Build failures**: Run type-check and lint
3. **Database connections**: Check environment variables
4. **API errors**: Verify request/response formats

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [MongoDB Mongoose Guide](https://mongoosejs.com/docs/guide.html)
