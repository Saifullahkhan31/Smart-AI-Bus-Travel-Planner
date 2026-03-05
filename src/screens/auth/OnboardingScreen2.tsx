import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { Colors } from '../../constants/colors';
import { Spacing, BorderRadius } from '../../constants/spacing';
import { Typography } from '../../constants/typography';

// SCREEN NAME: OnboardingScreen2
// FIGMA FRAME: Onboarding Screen 2
// ROUTE: Onboarding2

interface Props {
  navigation: any;
}

// Phone with seat map illustration
function PhoneIllustration() {
  return (
    <View style={styles.phoneContainer}>
      {/* Phone body */}
      <View style={styles.phoneBody}>
        {/* Phone speaker */}
        <View style={styles.phoneSpeaker} />

        {/* Screen area */}
        <View style={styles.phoneScreen}>
          {/* Header bar */}
          <View style={styles.screenHeader}>
            <Text style={styles.screenTitle}>Select Your Seat</Text>
            <Text style={styles.screenSubtitle}>Bus #14 · 5 seats available</Text>
          </View>

          {/* Driver indicator */}
          <View style={styles.driverIndicator}>
            <View style={styles.steeringWheel} />
            <Text style={styles.driverText}>← Front of bus →</Text>
          </View>

          {/* Seat grid */}
          <View style={styles.seatGrid}>
            {/* Row A */}
            <View style={styles.seatRow}>
              <Text style={styles.rowLabel}>A</Text>
              <View style={[styles.seat, styles.seatBooked]} />
              <View style={[styles.seat, styles.seatBooked]} />
              <View style={[styles.seat, styles.seatAvailable]} />
              <View style={[styles.seat, styles.seatAvailable]} />
              <View style={[styles.seat, styles.seatBooked]} />
            </View>
            {/* Row B */}
            <View style={styles.seatRow}>
              <Text style={styles.rowLabel}>B</Text>
              <View style={[styles.seat, styles.seatAvailable]} />
              <View style={[styles.seat, styles.seatBooked]} />
              <View style={[styles.seat, styles.seatAvailable]} />
              <View style={[styles.seat, styles.seatSelected]} />
              <View style={[styles.seat, styles.seatAvailable]} />
            </View>
            {/* Row C */}
            <View style={styles.seatRow}>
              <Text style={styles.rowLabel}>C</Text>
              <View style={[styles.seat, styles.seatBooked]} />
              <View style={[styles.seat, styles.seatAvailable]} />
              <View style={[styles.seat, styles.seatBooked]} />
              <View style={[styles.seat, styles.seatAvailable]} />
              <View style={[styles.seat, styles.seatAvailable]} />
            </View>
            {/* Row D */}
            <View style={styles.seatRow}>
              <Text style={styles.rowLabel}>D</Text>
              <View style={[styles.seat, styles.seatAvailable]} />
              <View style={[styles.seat, styles.seatAvailable]} />
              <View style={[styles.seat, styles.seatBooked]} />
              <View style={[styles.seat, styles.seatBooked]} />
              <View style={[styles.seat, styles.seatAvailable]} />
            </View>
          </View>

          {/* Legend */}
          <View style={styles.legend}>
            <View style={[styles.legendDot, { backgroundColor: Colors.success }]} />
            <Text style={styles.legendText}>Free</Text>
            <View style={[styles.legendDot, { backgroundColor: Colors.primary }]} />
            <Text style={styles.legendText}>Taken</Text>
            <View style={[styles.legendDot, { backgroundColor: Colors.comfort }]} />
            <Text style={styles.legendText}>Yours</Text>
          </View>

          {/* Home indicator */}
          <View style={styles.homeIndicator} />
        </View>

        {/* Phone side buttons */}
        <View style={styles.powerButton} />
        <View style={styles.volumeButtonTop} />
        <View style={styles.volumeButtonBottom} />
      </View>
    </View>
  );
}

// Gender toggle switch
function GenderToggle() {
  return (
    <View style={styles.toggle}>
      <View style={styles.toggleTrack} />
      <View style={styles.toggleThumb} />
    </View>
  );
}

// QR Code icon
function QRCodeIcon() {
  return (
    <View style={styles.qrContainer}>
      <View style={styles.qrGrid}>
        {/* Simplified QR pattern */}
        <View style={[styles.qrBlock, styles.qrPattern1]} />
        <View style={[styles.qrBlock, styles.qrPattern2]} />
        <View style={[styles.qrBlock, styles.qrPattern3]} />
      </View>
    </View>
  );
}

export default function OnboardingScreen2({ navigation }: Props) {
  const cardTranslateAnim = useRef(new Animated.Value(28)).current;
  const cardOpacityAnim = useRef(new Animated.Value(0)).current;
  const chipLeftTranslateAnim = useRef(new Animated.Value(-14)).current;
  const chipLeftOpacityAnim = useRef(new Animated.Value(0)).current;
  const chipRightTranslateAnim = useRef(new Animated.Value(14)).current;
  const chipRightOpacityAnim = useRef(new Animated.Value(0)).current;
  const bookedBadgeScaleAnim = useRef(new Animated.Value(0.7)).current;
  const bookedBadgeOpacityAnim = useRef(new Animated.Value(0)).current;
  const textTranslateAnim = useRef(new Animated.Value(18)).current;
  const textOpacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Card animation
    Animated.timing(cardTranslateAnim, {
      toValue: 0,
      duration: 650,
      delay: 60,
      useNativeDriver: false,
    }).start();

    Animated.timing(cardOpacityAnim, {
      toValue: 1,
      duration: 650,
      delay: 60,
      useNativeDriver: false,
    }).start();

    // Left chip
    Animated.timing(chipLeftTranslateAnim, {
      toValue: 0,
      duration: 520,
      delay: 480,
      useNativeDriver: false,
    }).start();

    Animated.timing(chipLeftOpacityAnim, {
      toValue: 1,
      duration: 520,
      delay: 480,
      useNativeDriver: false,
    }).start();

    // Right chip
    Animated.timing(chipRightTranslateAnim, {
      toValue: 0,
      duration: 520,
      delay: 420,
      useNativeDriver: false,
    }).start();

    Animated.timing(chipRightOpacityAnim, {
      toValue: 1,
      duration: 520,
      delay: 420,
      useNativeDriver: false,
    }).start();

    // Booked badge
    Animated.timing(bookedBadgeScaleAnim, {
      toValue: 1,
      duration: 450,
      delay: 600,
      useNativeDriver: false,
    }).start();

    Animated.timing(bookedBadgeOpacityAnim, {
      toValue: 1,
      duration: 450,
      delay: 600,
      useNativeDriver: false,
    }).start();

    // Text content
    Animated.timing(textTranslateAnim, {
      toValue: 0,
      duration: 600,
      delay: 360,
      useNativeDriver: false,
    }).start();

    Animated.timing(textOpacityAnim, {
      toValue: 1,
      duration: 600,
      delay: 360,
      useNativeDriver: false,
    }).start();
  }, []);

  const handleSkip = () => {
    navigation.replace('OnboardingStack', { screen: 'Onboarding3' });
  };

  const handleNext = () => {
    navigation.navigate('OnboardingStack', { screen: 'Onboarding3' });
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Skip button */}
        <TouchableOpacity
          onPress={handleSkip}
          style={styles.skipButton}
          activeOpacity={0.7}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        {/* Illustration Card */}
        <Animated.View
          style={[
            styles.illustrationCard,
            {
              transform: [{ translateY: cardTranslateAnim }],
              opacity: cardOpacityAnim,
            },
          ]}
        >
          <View style={styles.cardBackground} />

          {/* Phone illustration */}
          <PhoneIllustration />

          {/* Booked badge - top left */}
          <Animated.View
            style={[
              styles.bookedBadge,
              {
                transform: [{ scale: bookedBadgeScaleAnim }],
                opacity: bookedBadgeOpacityAnim,
              },
            ]}
          >
            <Text style={styles.bookedCheckmark}>✓</Text>
            <Text style={styles.bookedText}>Booked!</Text>
          </Animated.View>

          {/* Right chip - Digital Ticket QR */}
          <Animated.View
            style={[
              styles.chipRight,
              {
                transform: [{ translateX: chipRightTranslateAnim }],
                opacity: chipRightOpacityAnim,
              },
            ]}
          >
            <QRCodeIcon />
            <Text style={styles.chipLabel}>Digital Ticket</Text>
          </Animated.View>

          {/* Left chip - Gender Preference */}
          <Animated.View
            style={[
              styles.chipLeft,
              {
                transform: [{ translateX: chipLeftTranslateAnim }],
                opacity: chipLeftOpacityAnim,
              },
            ]}
          >
            <View style={styles.genderHeader}>
              <Text style={styles.genderLabel}>Gender Preference</Text>
              <GenderToggle />
            </View>

            <View style={styles.genderOptions}>
              {/* Female */}
              <View style={styles.genderOption}>
                <Text style={styles.genderSymbol}>♀</Text>
                <Text style={[styles.genderText, { color: '#D946EF' }]}>Female</Text>
              </View>
              {/* Male */}
              <View style={styles.genderOption}>
                <Text style={styles.genderSymbol}>♂</Text>
                <Text style={[styles.genderText, { color: Colors.primary }]}>Male</Text>
              </View>
            </View>
          </Animated.View>
        </Animated.View>

        {/* Slide indicators */}
        <View style={styles.indicators}>
          <View style={styles.indicator} />
          <View style={[styles.indicator, styles.indicatorActive]} />
          <View style={styles.indicator} />
        </View>

        {/* Text content */}
        <Animated.View
          style={[
            styles.textContent,
            {
              transform: [{ translateY: textTranslateAnim }],
              opacity: textOpacityAnim,
            },
          ]}
        >
          {/* Badge */}
          <View style={styles.badge}>
            <Text style={styles.badgeEmoji}>🎫</Text>
            <Text style={styles.badgeText}>Smart Seat Booking</Text>
          </View>

          {/* Title */}
          <Text style={styles.title}>Your Seat, Your Choice</Text>

          {/* Description */}
          <Text style={styles.description}>
            Pre-book your preferred seat, choose your gender zone, and pay digitally with a QR code — all before you board.
          </Text>
        </Animated.View>

        {/* Spacer */}
        <View style={{ flex: 1 }} />

        {/* Bottom CTA */}
        <Animated.View
          style={[
            styles.ctaContainer,
            {
              transform: [{ translateY: textTranslateAnim }],
              opacity: textOpacityAnim,
            },
          ]}
        >
          <TouchableOpacity
            onPress={handleNext}
            style={styles.primaryButton}
            activeOpacity={0.88}
          >
            <Text style={styles.buttonText}>Next →</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLogin} activeOpacity={0.7}>
            <Text style={styles.loginLink}>
              Already have an account?{' '}
              <Text style={styles.loginLinkBold}>Log In</Text>
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing.screenPadding,
    paddingBottom: Spacing.safeBottom,
    minHeight: '100%',
  },
  skipButton: {
    position: 'absolute',
    top: Spacing.xl + 20,
    right: Spacing.screenPadding,
    zIndex: 10,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
  },
  skipText: {
    ...Typography.bodyMedium,
    color: Colors.textSecondary,
  },
  illustrationCard: {
    marginTop: 80,
    height: 334,
    borderRadius: BorderRadius.xxl,
    backgroundColor: Colors.white,
    overflow: 'hidden',
    ...{
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.06,
      shadowRadius: 12,
      elevation: 3,
    },
  },
  cardBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#F0FDF4',
  },
  phoneContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.xl,
  },
  phoneBody: {
    width: 160,
    height: 240,
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.xl,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.border,
    ...{
      shadowColor: '#000',
      shadowOffset: { width: 4, height: 8 },
      shadowOpacity: 0.07,
      shadowRadius: 12,
      elevation: 5,
    },
  },
  phoneSpeaker: {
    height: 8,
    backgroundColor: Colors.border,
    marginTop: 4,
  },
  phoneScreen: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  screenHeader: {
    backgroundColor: Colors.white,
    paddingVertical: Spacing.sm,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  screenTitle: {
    ...Typography.captionMedium,
    color: Colors.textPrimary,
    fontSize: 9,
  },
  screenSubtitle: {
    ...Typography.tiny,
    color: Colors.textMuted,
    fontSize: 7,
    marginTop: 2,
  },
  driverIndicator: {
    backgroundColor: Colors.primaryTint,
    paddingVertical: Spacing.xs,
    alignItems: 'center',
    marginHorizontal: Spacing.sm,
    marginTop: Spacing.xs,
    borderRadius: BorderRadius.md,
  },
  steeringWheel: {
    width: 14,
    height: 14,
    borderRadius: BorderRadius.full,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  driverText: {
    ...Typography.tiny,
    color: Colors.textMuted,
    fontSize: 6.5,
    marginTop: Spacing.xs,
  },
  seatGrid: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    gap: Spacing.xs,
  },
  seatRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  rowLabel: {
    ...Typography.tiny,
    color: Colors.textMuted,
    fontSize: 7,
    width: 12,
    textAlign: 'center',
  },
  seat: {
    width: 12,
    height: 12,
    borderRadius: BorderRadius.full,
  },
  seatAvailable: {
    backgroundColor: Colors.success,
  },
  seatBooked: {
    backgroundColor: Colors.primary,
    opacity: 0.6,
  },
  seatSelected: {
    backgroundColor: Colors.comfort,
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.sm,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    flexWrap: 'wrap',
  },
  legendDot: {
    width: 6,
    height: 6,
    borderRadius: BorderRadius.full,
  },
  legendText: {
    ...Typography.tiny,
    color: Colors.textMuted,
    fontSize: 6,
  },
  homeIndicator: {
    height: 4,
    backgroundColor: Colors.border,
    marginTop: Spacing.xs,
  },
  powerButton: {
    position: 'absolute',
    right: -2,
    top: 40,
    width: 4,
    height: 20,
    backgroundColor: Colors.border,
    borderRadius: BorderRadius.sm,
  },
  volumeButtonTop: {
    position: 'absolute',
    left: -2,
    top: 35,
    width: 4,
    height: 14,
    backgroundColor: Colors.border,
    borderRadius: BorderRadius.sm,
  },
  volumeButtonBottom: {
    position: 'absolute',
    left: -2,
    top: 52,
    width: 4,
    height: 14,
    backgroundColor: Colors.border,
    borderRadius: BorderRadius.sm,
  },
  bookedBadge: {
    position: 'absolute',
    top: Spacing.lg,
    left: Spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
    backgroundColor: Colors.successTint,
    borderRadius: BorderRadius.full,
    paddingHorizontal: Spacing.md,
    paddingVertical: 4,
    ...{
      shadowColor: Colors.success,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.18,
      shadowRadius: 8,
      elevation: 2,
    },
  },
  bookedCheckmark: {
    color: Colors.success,
    fontSize: 12,
    fontWeight: '700',
  },
  bookedText: {
    ...Typography.captionMedium,
    color: Colors.success,
  },
  chipRight: {
    position: 'absolute',
    top: Spacing.lg,
    right: Spacing.lg,
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    alignItems: 'center',
    gap: Spacing.md,
    ...{
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.09,
      shadowRadius: 14,
      elevation: 3,
    },
  },
  qrContainer: {
    width: 44,
    height: 44,
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.sm,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  qrGrid: {
    width: 36,
    height: 36,
    backgroundColor: '#0F172A',
    borderRadius: BorderRadius.xs,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 2,
  },
  qrBlock: {
    width: 4,
    height: 4,
    backgroundColor: Colors.white,
    borderRadius: 1,
  },
  qrPattern1: {},
  qrPattern2: {},
  qrPattern3: {},
  chipLabel: {
    ...Typography.tiny,
    color: Colors.primary,
    fontSize: 9,
    fontWeight: '600',
  },
  chipLeft: {
    position: 'absolute',
    bottom: Spacing.lg,
    left: Spacing.lg,
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    gap: Spacing.md,
    minWidth: 140,
    ...{
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.09,
      shadowRadius: 14,
      elevation: 3,
    },
  },
  genderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  genderLabel: {
    ...Typography.tiny,
    color: Colors.textPrimary,
    fontSize: 9,
    fontWeight: '600',
  },
  toggle: {
    width: 32,
    height: 18,
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.full,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 2,
  },
  toggleTrack: {},
  toggleThumb: {
    width: 14,
    height: 14,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.white,
  },
  genderOptions: {
    flexDirection: 'row',
    gap: Spacing.xs,
  },
  genderOption: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4,
    borderRadius: BorderRadius.sm,
    backgroundColor: '#F5F5F5',
    gap: 2,
  },
  genderSymbol: {
    fontSize: 12,
  },
  genderText: {
    ...Typography.tiny,
    fontSize: 8,
    fontWeight: '500',
  },
  indicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.sm,
    marginTop: Spacing.xl,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: BorderRadius.full,
    backgroundColor: '#CBD5E1',
  },
  indicatorActive: {
    width: 24,
    backgroundColor: Colors.primary,
  },
  textContent: {
    alignItems: 'center',
    marginTop: Spacing.xl,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
    backgroundColor: Colors.successTint,
    borderRadius: BorderRadius.full,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
  },
  badgeEmoji: {
    fontSize: 11,
  },
  badgeText: {
    ...Typography.captionMedium,
    color: Colors.success,
  },
  title: {
    ...Typography.h1,
    color: Colors.textPrimary,
    marginTop: Spacing.md,
    textAlign: 'center',
  },
  description: {
    ...Typography.body,
    color: Colors.textSecondary,
    marginTop: Spacing.md,
    textAlign: 'center',
    lineHeight: 23,
  },
  ctaContainer: {
    gap: 0,
    marginTop: Spacing.xxxl,
  },
  primaryButton: {
    width: '100%',
    height: 52,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    ...{
      shadowColor: Colors.primary,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 12,
      elevation: 6,
    },
  },
  buttonText: {
    ...Typography.buttonLabel,
    color: Colors.white,
  },
  loginLink: {
    ...Typography.body,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: Spacing.lg,
  },
  loginLinkBold: {
    color: Colors.primary,
    fontWeight: '600',
  },
});
