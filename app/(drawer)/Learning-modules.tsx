import React, { useEffect } from 'react';
import { Text, StyleSheet, FlatList, View } from 'react-native';
import { useTheme } from '../Themes/ThemeContext';
import ExpandableItems from '../components/ExpandableItems';
import { useRouter } from "expo-router";
import * as ScreenOrientation from 'expo-screen-orientation';
// we use the imperative API instead of the hook to avoid crashes
// when the activity goes away; the hook simply wraps these methods
// so we dynamically import them inside a useEffect.

export default function LearningModules() {
    const router = useRouter();
    const { theme } = useTheme();

    const [isLandscape, setIsLandscape] = React.useState(false);

    // ✅ keep the screen awake while this component is mounted
    // `useKeepAwake` sometimes throws when the underlying native activity
    // has already been torn down (especially during fast navigation or
    // when using the dev client).  the hook itself is just a thin wrapper
    // around the imperative API, so we call the async methods directly and
    // swallow any errors.
    useEffect(() => {
        let active = true;

        // the imperative API uses async functions; the original warnings
        // stemmed from the deprecated non-async names.
        import('expo-keep-awake').then(({ activateKeepAwakeAsync }) => {
            if (active) {
                activateKeepAwakeAsync().catch(() => {
                    // ignore – activity may not be available
                });
            }
        });

        return () => {
            active = false;
            import('expo-keep-awake').then((module) => {
                module.deactivateKeepAwake();
            });
        };
    }, []);

    useEffect(() => {
        // Unlock screen orientation
        ScreenOrientation.unlockAsync();

        // Track orientation changes
        const subscription = ScreenOrientation.addOrientationChangeListener(({ orientationInfo }) => {
            setIsLandscape(
                orientationInfo.orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
                orientationInfo.orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT
            );
        });

        // Cleanup listener on unmount
        return () => {
            ScreenOrientation.removeOrientationChangeListener(subscription);
        };
    }, []);

    // ✅ handle navigation when a topic is selected
    const handleSelect = (module: string, topic: string) => {
        const formattedTopic = topic.replace(/[^a-zA-Z0-9]/g, '');
        if (module === "Data Structures") {
            router.push(`/DataStructures/${formattedTopic}`);
        } else if (module == "Algorithms") {
            router.push(`/Algorithms/${formattedTopic}`);
        } else if (module == "Advance Patterns") {
            router.push(`/AdvancePatterns/${formattedTopic}`);
        }
    };

    const modules = [
        {
            title: "Data Structures",
            items: ["Arrays", "Linked List", "HashMaps", "Stacks", "Queues", "Trees", "Graphs"]
        },
        {
            title: "Algorithms",
            items: ["Sorting", "Searching", "Dynamic Programming", "Greedy", "Graph Algorithms", "Backtracking"]
        },
        {
            title: "Advance Patterns",
            items: ["Two Pointers", "Sliding Window", "Fast And Slow Pointers", "Binary Search", "Prefix Sum", "Backtracking Pattern ", "Bit Manipulation"]
        }
    ];

    interface Module {
        title: string;
        items: string[];
    }

    const renderItem = React.useCallback(({ item }: { item: Module }) => (
        <ExpandableItems
            title={item.title}
            items={item.items}
            onSelectItem={(topic) => handleSelect(item.title, topic)}
        />
    ), []);


    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text
                style={[
                    styles.heading,
                    {
                        color: theme.colors.text,
                        textAlign: isLandscape ? "center" : "left",
                        fontSize: isLandscape ? 28 : 24
                    }
                ]}
            >
                Learning Modules
            </Text>
            <FlatList
                data={modules}
                renderItem={renderItem}
                keyExtractor={(item) => item.title}
                contentContainerStyle={[
                    styles.contentContainer,
                    { paddingHorizontal: isLandscape ? 30 : 20, paddingBottom: 30 },
                ]}
                ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
                showsVerticalScrollIndicator={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    contentContainer: {
        paddingBottom: 40,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});
