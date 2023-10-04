# import libraries
import circlify
import matplotlib.pyplot as plt
from matplotlib.patches import Circle
import pandas as pd


def generate_image(df, title, filename):
    # Compute circle positions
    circles = circlify.circlify(
        df['Value'].tolist(), 
        show_enclosure=False, 
        target_enclosure=circlify.Circle(x=0, y=0, r=1)
    )

    # Create just a figure and only one subplot
    fig, ax = plt.subplots(figsize=(10,10))

    # Title
    ax.set_title(title)

    # Remove axes
    ax.axis('off')

    # Find axis boundaries
    lim = max(
        max(
            abs(circle.x) + circle.r,
            abs(circle.y) + circle.r,
        )
        for circle in circles
    )
    plt.xlim(-lim, lim)
    plt.ylim(-lim, lim)

    # list of labels
    labels = df['Name']

    # print circles
    for circle, label in zip(circles, labels):
        x, y, r = circle
        ax.add_patch(Circle((x, y), r, alpha=0.2, linewidth=2))
        plt.annotate(
            label, 
            (x,y ) ,
            va='center',
            ha='center'
        )
        

    plt.savefig(filename)


generate_image(pd.DataFrame({
    # Department
    # Generated from report 4 using /([a-zA-Z]+).*([\d,]+)$/[$2, '$1']/g and wrangling in IDLE
    'Name': reversed(['Department of Education', 'Miscellaneous', 'Social Services', 'Pensions', 'All Other Agencies', 'Police', 'Homeless Services', 'Debt Services', "Administration for Children's Services", 'Fire', 'Health and Mental Hygiene', 'Sanitation', 'NYC Health + Hospitals', 'Department of Environmental Protection (DEP)', 'Department of Citywide Administrative Services (DCAS)', 'CUNY', 'Department of Housing Preservation and Development', 'Department of Transportation (DOT)', 'Correction', 'Department of Parks and Recreation (NYC Parks)']),
    # Millions
    'Value': [31499, 15490, 11481, 9642, 6521, 5805, 4108, 2761, 2736, 2299, 2202, 1901, 1824, 1662, 1644, 1458, 1413, 1405, 1166, 638]
}), 'Department Spending for FY2024', 'department-spending.png')

generate_image(pd.DataFrame({
    'Name': reversed(['Education', 'Housing', 'All Other Departments', 'Correction', 'Transit', 'Water Pollution Control', 'Economic Development', 'Highway and Streets', 'Water Supply', 'Parks', 'Police', 'Hospitals', 'Sanitation', 'Sewers', 'Water Mains, Sources & Treatment', 'Fire', 'Public Buildings', 'Highway Bridges', 'Waterway Bridges']),
    'Value': [4725.7, 4013.6, 3267.1, 3194.9, 1700, 1045.6, 827.1, 807.2, 770.6, 757.8, 504.1, 478.4, 471.6, 454.6, 410.9, 386.1, 265.8, 188.9, 28.8]
}), 'Capital Commitments', 'capital-commitments.png')

'''
TRANSIT $0.0 (C) $0.0 (C) $1,700.0 (C)
0.0 (N) 0.0 (N) 0.0 (N)
HIGHWAY AND STREETS 0.2 (C) 0.2 (C) 707.0 (C)
0.0 (N) 0.0 (N) 100.2 (N)
HIGHWAY BRIDGES 1.6 (C) 1.6 (C) 62.9 (C)
1.7 (N) 1.7 (N) 126.0 (N)
WATERWAY BRIDGES 0.0 (C) 0.0 (C) 28.8 (C)
0.0 (N) 0.0 (N) 0.0 (N)
WATER SUPPLY 0.0 (C) 0.0 (C) 765.7 (C)
0.0 (N) 0.0 (N) 0.0 (N)
WATER MAINS, (0.6) (C) (0.6) (C) 410.9 (C)
SOURCES & TREATMENT 0.0 (N) 0.0 (N) 4.9 (N)
SEWERS (0.1) (C) (0.1) (C) 454.6 (C)
0.0 (N) 0.0 (N) 0.0 (N)
WATER POLLUTION CONTROL (27.2) (C) (27.2) (C) 901.2 (C)
0.0 (N) 0.0 (N) 144.4 (N)
ECONOMIC DEVELOPMENT 4.4 (C) 4.4 (C) 600.2 (C)
0.8 (N) 0.8 (N) 226.9 (N)
EDUCATION 953.3 (C) 953.3 (C) 4,625.9 (C)
0.0 (N) 0.0 (N) 99.8 (N)
CORRECTION 0.0 (C) 0.0 (C) 3,161.6 (C)
0.0 (N) 0.0 (N) 33.3 (N)
SANITATION (1.6) (C) (1.6) (C) 462.6 (C)
0.0 (N) 0.0 (N) 9.0 (N)
POLICE 0.2 (C) 0.2 (C) 487.8 (C)
0.0 (N) 0.0 (N) 16.3 (N)
FIRE 65.3 (C) 65.3 (C) 355.6 (C)
1.9 (N) 1.9 (N) 30.5 (N)
HOUSING (4.3) (C) (4.3) (C) 3,973.6 (C)
(1.4) (N) (1.4) (N) 40.0 (N)
HOSPITALS 44.3 (C) 44.3 (C) 467.5 (C)
1.6 (N) 1.6 (N) 10.9 (N)
PUBLIC BUILDINGS 2.2 (C) 2.2 (C) 265.8 (C)
0.0 (N) 0.0 (N) 0.0 (N)
PARKS 10.9 (C) 10.9 (C) 580.0 (C)
0.2 (N) 0.2 (N) 177.8 (N)
ALL OTHER DEPARTMENTS 19.0 (C) 19.0 (C) 3,064.4 (C)
0.0 (N) 0.0 (N) 202.7 (N)
'''
