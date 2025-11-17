// ======= DATA LAYER (SIMULATED MYSQL) =======
console.log("app.js is loaded!");

const db = {
    Motorists: [
        {
            MotoristID: 1,
            LastName: 'Lastimada',
            FirstName: 'Kurt',
            MiddleName: 'Villanueva',
            Nationality: 'Filipino',
            Sex: 'Male',
            DateOfBirth: '1995-06-12',
            Weight: 68.5,
            Height: 175.0,
            Address: 'Lucena City',
            LicenseNumber: 'N01-95-123456',
            ExpirationDate: '2028-06-12',
            AgencyCode: 'LTO-LC',
            BloodType: 'O',
            EyeColor: 'Brown',
            DLCodes: 'A,B',
            Conditions: 'Must wear eyeglasses',
            LicenseType: 'Non-Professional'
        }
    ],
    Medical: [
        {
            MedicalID: 1,
            MotoristID: 1,
            Vision: '20/20',
            MedicalCondition: 'None',
            DateOfExamination: '2025-01-01'
        }
    ],
    Vehicles: [
        {
            VehicleID: 1,
            MotoristID: 1,
            PlateNumber: 'XYZ123',
            ChassisNumber: '123ABC',
            Status: 'Active'
        }
    ],
    Insurance: [
        {
            InsuranceID: 1,
            VehicleID: 1,
            PolicyNumber: 'INS123',
            Provider: 'XYZ Insurance',
            StartDate: '2025-01-01',
            EndDate: '2026-01-01',
            PremiumAmount: 1000.0,
            Status: 'Active'
        }
    ],
    Violations: [
        {
            ViolationID: 1,
            MotoristID: 1,
            VehicleID: 1,
            ViolationType: 'Speeding',
            ViolationDate: '2025-05-01',
            Status: 'Pending'
        }
    ],
    Disputes: [],
    Renewals: [
        {
            RenewalID: 1,
            MotoristID: 1,
            VehicleID: 1,
            RenewalDate: '2025-05-05',
            ExpiryDate: '2026-05-05',
            Status: 'Approved'
        }
    ],
    FinesAndPayments: [
        {
            FineID: 1,
            ViolationID: 1,
            Amount: 3000.0,
            DueDate: '2025-05-15',
            PaymentStatus: 'Unpaid',
            PaymentDate: ''
        }
    ],
    LtoViolations: [
        { ViolationID: 1, Violation: 'Driving without a valid license', Fine_Min: 3000, Fine_Max: 3000, Law_Reference: 'RA 4136', Notes: '1-year driving ban for some cases' },
        { ViolationID: 2, Violation: 'Driving with expired license', Fine_Min: 1000, Fine_Max: 1000, Law_Reference: 'RA 4136', Notes: null },
        { ViolationID: 3, Violation: 'Failure to carry OR/CR', Fine_Min: 1000, Fine_Max: 1000, Law_Reference: 'RA 4136', Notes: null },
        { ViolationID: 4, Violation: 'Failure to wear motorcycle helmet', Fine_Min: 1500, Fine_Max: 10000, Law_Reference: 'RA 10054', Notes: 'Increasing penalties per offense' },
        { ViolationID: 5, Violation: 'Substandard / no ICC helmet', Fine_Min: 3000, Fine_Max: 5000, Law_Reference: 'RA 10054', Notes: null },
        { ViolationID: 6, Violation: 'Failure to wear seatbelt', Fine_Min: 1000, Fine_Max: 5000, Law_Reference: 'RA 8750', Notes: '3rd offense may include license suspension' },
        { ViolationID: 7, Violation: 'Reckless driving', Fine_Min: 2000, Fine_Max: 10000, Law_Reference: 'RA 4136', Notes: '2nd/3rd offense include suspensions' },
        { ViolationID: 8, Violation: 'Overspeeding / speed limit violation', Fine_Min: 1200, Fine_Max: 2000, Law_Reference: 'RA 4136', Notes: 'With demerit points' },
        { ViolationID: 9, Violation: 'Driving under the influence (DUI)', Fine_Min: 50000, Fine_Max: 500000, Law_Reference: 'RA 10586', Notes: 'Includes possible imprisonment or revocation' },
        { ViolationID: 10, Violation: 'Smoke-belching / emission violation', Fine_Min: 2000, Fine_Max: 6000, Law_Reference: 'RA 8749', Notes: '3rd offense = 1-year MV registration suspension' },
        { ViolationID: 11, Violation: 'Driving an unregistered motor vehicle', Fine_Min: 2000, Fine_Max: 10000, Law_Reference: 'RA 4136', Notes: 'Vehicle may be impounded' },
        { ViolationID: 12, Violation: 'Fraud in motor vehicle registration', Fine_Min: 3000, Fine_Max: 3000, Law_Reference: 'RA 4136', Notes: 'Vehicle impound + 1-year registration ban' },
        { ViolationID: 13, Violation: 'Unauthorized vehicle modification', Fine_Min: 5000, Fine_Max: 5000, Law_Reference: 'LTO AO', Notes: 'Includes illegal accessories, altered dimensions' },
        { ViolationID: 14, Violation: 'Tampering / improper license plate attachment', Fine_Min: 5000, Fine_Max: 5000, Law_Reference: 'RA 4136', Notes: null },
        { ViolationID: 15, Violation: 'Not attaching larger motorcycle plates', Fine_Min: 50000, Fine_Max: 100000, Law_Reference: 'RA 11235', Notes: null },
        { ViolationID: 16, Violation: 'Operating a right-hand-drive vehicle', Fine_Min: 50000, Fine_Max: 50000, Law_Reference: 'RA 4136', Notes: 'Vehicle subject to impound' },
        { ViolationID: 17, Violation: 'Anti-distracted driving violation', Fine_Min: 5000, Fine_Max: 20000, Law_Reference: 'RA 10913', Notes: 'Higher fines for subsequent offenses' },
        { ViolationID: 18, Violation: 'Using mobile phone while driving', Fine_Min: 5000, Fine_Max: 20000, Law_Reference: 'RA 10913', Notes: 'Same as above' },
        { ViolationID: 19, Violation: 'Child on motorcycle (unsafe)', Fine_Min: 3000, Fine_Max: 3000, Law_Reference: 'RA 10666', Notes: null },
        { ViolationID: 20, Violation: 'Child restraint system not used', Fine_Min: 1000, Fine_Max: 5000, Law_Reference: 'RA 11229', Notes: '3rd offense = 1-year suspension' },
        { ViolationID: 21, Violation: 'Colorum PUV violation', Fine_Min: 50000, Fine_Max: null, Law_Reference: 'LTO/DOTr', Notes: 'Extreme penalties; varies by vehicle type' },
        { ViolationID: 22, Violation: 'Running red light / disobeying traffic light', Fine_Min: 2500, Fine_Max: 2500, Law_Reference: 'LTO AO', Notes: 'Penalty varies per LGU' },
        { ViolationID: 23, Violation: 'Overloading (axle or width overlimit)', Fine_Min: null, Fine_Max: null, Law_Reference: 'RA 8794', Notes: 'Fine equals 25% of MVUC' },
        { ViolationID: 24, Violation: 'Driving with unauthorized sirens/horns', Fine_Min: 5000, Fine_Max: 5000, Law_Reference: 'RA 4136', Notes: 'Covers wangwang, blinkers, sirens' },
        { ViolationID: 25, Violation: 'Other motor vehicle registration violations', Fine_Min: 2000, Fine_Max: 2000, Law_Reference: 'RA 4136', Notes: null }
    ]
};

const tablePrimaryKeys = {
    Motorists: 'MotoristID',
    Medical: 'MedicalID',
    Vehicles: 'VehicleID',
    Insurance: 'InsuranceID',
    Violations: 'ViolationID',
    Disputes: 'DisputeID',
    Renewals: 'RenewalID',
    FinesAndPayments: 'FineID',
    LtoViolations: 'ViolationID'
};

const entityToTable = {
    motorist: 'Motorists',
    vehicle: 'Vehicles',
    violation: 'Violations',
    fine: 'FinesAndPayments',
    medical: 'Medical',
    insurance: 'Insurance',
    renewal: 'Renewals',
    dispute: 'Disputes'
};

const idTracker = Object.fromEntries(
    Object.entries(tablePrimaryKeys).map(([table, pk]) => {
        const rows = Array.isArray(db[table]) ? db[table] : [];
        const maxId = rows.length ? Math.max(...rows.map(r => Number(r[pk]) || 0)) : 0;
        return [table, maxId];
    })
);

const violationOptions = db.LtoViolations.map(v => v.Violation);

// ======= STATE =======
const state = {
    pagination: {
        motorists: { page: 1, size: 6 }
    },
    filters: {
        motorists: { search: '', license: '' },
        vehicles: { search: '' },
        violations: { from: '', to: '', status: '' },
        fines: { status: '' },
        medical: { search: '' },
        insurance: { search: '' },
        renewals: { search: '', status: '' },
        disputes: { search: '', status: '' }
    },
    caches: {
        motoristsFiltered: []
    },
    viewingRecord: null
};

// ======= UTILITIES =======
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const bindClick = (selector, handler) => {
    const el = $(selector);
    if (el) el.addEventListener('click', handler);
    return el;
};
const bindKeyup = (selector, handler) => {
    const el = $(selector);
    if (el) el.addEventListener('keyup', handler);
    return el;
};
const clone = (obj) => JSON.parse(JSON.stringify(obj));
const delay = (ms = 350) => new Promise(res => setTimeout(res, ms));

const toastEl = $('#toast');
const loaderOverlay = $('#loaderOverlay');
const loaderMessage = $('#loaderMessage');

function showToast(message, type = 'info') {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.style.borderColor = type === 'error' ? 'var(--danger)' : 'var(--highlight)';
    toastEl.classList.remove('hidden');
    toastEl.classList.add('visible');
    clearTimeout(showToast.timeout);
    showToast.timeout = setTimeout(() => {
        toastEl.classList.remove('visible');
        toastEl.classList.add('hidden');
    }, 2800);
}

function showLoader(message = 'Loading…') {
    if (!loaderOverlay) return;
    loaderMessage.textContent = message;
    loaderOverlay.classList.remove('hidden');
}

function hideLoader() {
    if (!loaderOverlay) return;
    loaderOverlay.classList.add('hidden');
}

function nextId(table) {
    idTracker[table] = (idTracker[table] || 0) + 1;
    return idTracker[table];
}

function numberOrNull(value) {
    if (value === '' || value === null || value === undefined) return null;
    const num = Number(value);
    return Number.isNaN(num) ? null : num;
}

function updateSummaryCards() {
    $('#cardMotorists').textContent = db.Motorists.length;
    $('#cardVehicles').textContent = db.Vehicles.length;
    $('#cardPendingViolations').textContent = db.Violations.filter(v => v.Status === 'Pending').length;
    $('#cardUnpaidFines').textContent = db.FinesAndPayments.filter(f => f.PaymentStatus === 'Unpaid').length;
}

// ======= TAB NAVIGATION =======
function initTabs() {
    const navLinks = $$('.nav-link');
    navLinks.forEach(btn => {
        btn.addEventListener('click', () => {
            navLinks.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const targetId = btn.dataset.target;
            $$('.section').forEach(sec => {
                sec.classList.toggle('visible', sec.id === targetId);
            });
        });
    });
}

function renderEmptyRow(tbody, cols, message) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td colspan="${cols}" class="empty-row">${message}</td>`;
    tbody.appendChild(tr);
}

// ======= TABLE RENDERERS =======
function renderMotorists(rows) {
    const tbody = $('#motoristsTableBody');
    tbody.innerHTML = '';
    if (!rows.length) {
        renderEmptyRow(tbody, 9, 'No motorists found');
        return;
    }
    rows.forEach(row => {
        const fullName = `${row.LastName}, ${row.FirstName} ${row.MiddleName || ''}`.replace(/\s+/g, ' ').trim();
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${row.MotoristID}</td>
          <td>${row.LicenseNumber}</td>
          <td>${fullName}</td>
          <td>${row.Sex}</td>
          <td>${row.DateOfBirth}</td>
          <td>${row.Address}</td>
          <td>${row.LicenseType}</td>
          <td>${row.ExpirationDate}</td>
            <td class="text-end">
                <div class="d-flex gap-1 justify-content-end">
                    <button class="btn btn-outline-light btn-sm ripple" data-action="view-motorist" data-id="${row.MotoristID}">
                        <i class="bi bi-eye"></i>
                    </button>
                    <button class="btn btn-outline-light btn-sm ripple" data-action="edit-motorist" data-id="${row.MotoristID}">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-outline-danger btn-sm ripple" data-action="delete-motorist" data-id="${row.MotoristID}">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
          </td>
        `;
        tbody.appendChild(tr);
    });
}

function renderVehicles(rows) {
    const tbody = $('#vehiclesTableBody');
    tbody.innerHTML = '';
    if (!rows.length) {
        renderEmptyRow(tbody, 6, 'No vehicles found');
        return;
    }
    rows.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${row.VehicleID}</td>
          <td>${row.MotoristID}</td>
          <td>${row.PlateNumber}</td>
          <td>${row.ChassisNumber}</td>
          <td>${row.Status}</td>
            <td class="text-end">
                <div class="d-flex gap-1 justify-content-end">
                    <button class="btn btn-outline-light btn-sm ripple" data-action="edit-vehicle" data-id="${row.VehicleID}">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-outline-danger btn-sm ripple" data-action="delete-vehicle" data-id="${row.VehicleID}">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
          </td>
        `;
        tbody.appendChild(tr);
    });
}

function renderViolations(rows) {
    const tbody = $('#violationsTableBody');
    tbody.innerHTML = '';
    if (!rows.length) {
        renderEmptyRow(tbody, 7, 'No violations match the filters');
        return;
    }
    rows.forEach(row => {
        const statusClass = row.Status ? row.Status.toLowerCase() : '';
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${row.ViolationID}</td>
          <td>${row.MotoristID}</td>
          <td>${row.VehicleID}</td>
          <td>${row.ViolationType}</td>
          <td>${row.ViolationDate}</td>
          <td><span class="chip ${statusClass}">${row.Status}</span></td>
            <td class="text-end">
                <div class="d-flex gap-1 justify-content-end">
                    <button class="btn btn-outline-light btn-sm ripple" data-action="edit-violation" data-id="${row.ViolationID}">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-outline-danger btn-sm ripple" data-action="delete-violation" data-id="${row.ViolationID}">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
          </td>
        `;
        tbody.appendChild(tr);
    });
}

function renderFines(rows) {
    const tbody = $('#finesTableBody');
    tbody.innerHTML = '';
    if (!rows.length) {
        renderEmptyRow(tbody, 7, 'No fines match the filters');
        return;
    }
    rows.forEach(row => {
        const statusClass = row.PaymentStatus ? row.PaymentStatus.toLowerCase() : '';
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${row.FineID}</td>
          <td>${row.ViolationID}</td>
          <td>${parseFloat(row.Amount).toFixed(2)}</td>
          <td>${row.DueDate}</td>
          <td><span class="chip ${statusClass}">${row.PaymentStatus}</span></td>
          <td>${row.PaymentDate || ''}</td>
            <td class="text-end">
                <div class="d-flex gap-1 justify-content-end">
                    <button class="btn btn-outline-light btn-sm ripple" data-action="edit-fine" data-id="${row.FineID}">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-outline-danger btn-sm ripple" data-action="delete-fine" data-id="${row.FineID}">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
          </td>
        `;
        tbody.appendChild(tr);
    });
}

function renderLto(rows) {
    const tbody = $('#ltoTableBody');
    tbody.innerHTML = '';
    if (!rows.length) {
        renderEmptyRow(tbody, 6, 'No reference rows found');
        return;
    }
    rows.forEach(row => {
        const min = row.Fine_Min == null ? '' : parseFloat(row.Fine_Min).toFixed(2);
        const max = row.Fine_Max == null ? '' : parseFloat(row.Fine_Max).toFixed(2);
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${row.ViolationID}</td>
          <td>${row.Violation}</td>
          <td>${min}</td>
          <td>${max}</td>
          <td>${row.Law_Reference || ''}</td>
          <td>${row.Notes || ''}</td>
        `;
        tbody.appendChild(tr);
    });
}

function renderMedical(rows) {
    const tbody = $('#medicalTableBody');
    tbody.innerHTML = '';
    if (!rows.length) {
        renderEmptyRow(tbody, 6, 'No medical records found');
        return;
    }
    rows.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.MedicalID}</td>
            <td>${row.MotoristID}</td>
            <td>${row.Vision || ''}</td>
            <td>${row.MedicalCondition || ''}</td>
            <td>${row.DateOfExamination}</td>
            <td class="text-end">
                <div class="d-flex gap-1 justify-content-end">
                    <button class="btn btn-outline-light btn-sm ripple" data-action="edit-medical" data-id="${row.MedicalID}">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-outline-danger btn-sm ripple" data-action="delete-medical" data-id="${row.MedicalID}">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function renderInsurance(rows) {
    const tbody = $('#insuranceTableBody');
    tbody.innerHTML = '';
    if (!rows.length) {
        renderEmptyRow(tbody, 7, 'No insurance records found');
        return;
    }
    rows.forEach(row => {
        const coverage = `${row.StartDate} → ${row.EndDate}`;
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.InsuranceID}</td>
            <td>${row.VehicleID}</td>
            <td>${row.PolicyNumber}</td>
            <td>${row.Provider}</td>
            <td><span class="chip ${row.Status.toLowerCase()}">${row.Status}</span></td>
            <td>${coverage}</td>
            <td class="text-end">
                <div class="d-flex gap-1 justify-content-end">
                    <button class="btn btn-outline-light btn-sm ripple" data-action="edit-insurance" data-id="${row.InsuranceID}">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-outline-danger btn-sm ripple" data-action="delete-insurance" data-id="${row.InsuranceID}">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function renderRenewals(rows) {
    const tbody = $('#renewalsTableBody');
    tbody.innerHTML = '';
    if (!rows.length) {
        renderEmptyRow(tbody, 7, 'No renewals found');
        return;
    }
    rows.forEach(row => {
        const statusClass = row.Status ? row.Status.toLowerCase() : '';
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.RenewalID}</td>
            <td>${row.MotoristID}</td>
            <td>${row.VehicleID}</td>
            <td>${row.RenewalDate}</td>
            <td>${row.ExpiryDate}</td>
            <td><span class="chip ${statusClass}">${row.Status}</span></td>
            <td class="text-end">
                <div class="d-flex gap-1 justify-content-end">
                    <button class="btn btn-outline-light btn-sm ripple" data-action="edit-renewal" data-id="${row.RenewalID}">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-outline-danger btn-sm ripple" data-action="delete-renewal" data-id="${row.RenewalID}">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function renderDisputes(rows) {
    const tbody = $('#disputesTableBody');
    tbody.innerHTML = '';
    if (!rows.length) {
        renderEmptyRow(tbody, 6, 'No disputes found');
        return;
    }
    rows.forEach(row => {
        const statusClass = row.ReviewStatus ? row.ReviewStatus.toLowerCase().replace(/\s+/g, '-') : '';
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.DisputeID}</td>
            <td>${row.ViolationID}</td>
            <td>${row.MotoristID}</td>
            <td><span class="chip ${statusClass}">${row.ReviewStatus}</span></td>
            <td>${row.SubmissionDate}</td>
            <td class="text-end">
                <div class="d-flex gap-1 justify-content-end">
                    <button class="btn btn-outline-light btn-sm ripple" data-action="edit-dispute" data-id="${row.DisputeID}">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-outline-danger btn-sm ripple" data-action="delete-dispute" data-id="${row.DisputeID}">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function renderMotoristPagination(totalPages, totalRecords) {
    const meta = $('#motoristPageMeta');
    const { page } = state.pagination.motorists;
    meta.textContent = `Page ${totalPages ? page : 0} of ${totalPages} • ${totalRecords} record${totalRecords === 1 ? '' : 's'}`;
    $('#motoristPrevBtn').disabled = page <= 1;
    $('#motoristNextBtn').disabled = page >= totalPages;
}

// ======= LOADERS =======
async function loadMotorists(options = {}, silent = false) {
    const searchInput = options.search ?? state.filters.motorists.search;
    const licenseFilter = options.license ?? state.filters.motorists.license;
    state.filters.motorists = {
        search: searchInput.trim().toLowerCase(),
        license: licenseFilter
    };

    if (!silent) showLoader('Refreshing motorists…');
    await delay();

    const data = db.Motorists.filter(row => {
        const fullName = `${row.LastName} ${row.FirstName} ${row.MiddleName || ''}`.toLowerCase();
        const matchesSearch = !state.filters.motorists.search
            || fullName.includes(state.filters.motorists.search)
            || row.LicenseNumber.toLowerCase().includes(state.filters.motorists.search);
        const matchesLicense = !state.filters.motorists.license || row.LicenseType === state.filters.motorists.license;
        return matchesSearch && matchesLicense;
    }).sort((a, b) => a.LastName.localeCompare(b.LastName));

    state.caches.motoristsFiltered = data;

    const totalPages = Math.max(1, Math.ceil(data.length / state.pagination.motorists.size));
    state.pagination.motorists.page = Math.min(state.pagination.motorists.page, totalPages);
    const start = (state.pagination.motorists.page - 1) * state.pagination.motorists.size;
    const rows = data.slice(start, start + state.pagination.motorists.size);

    renderMotorists(rows);
    renderMotoristPagination(totalPages, data.length);

    const note = $('#motoristFilterNote');
    if (!data.length) {
        note.textContent = 'No motorists match the filters';
    } else if (state.filters.motorists.search || state.filters.motorists.license) {
        note.textContent = `Filtered: ${data.length} result${data.length === 1 ? '' : 's'}`;
    } else {
        note.textContent = `Showing all ${data.length} motorists`;
    }

    updateSummaryCards();
    if (!silent) hideLoader();
}

async function loadVehicles(searchValue, silent = false) {
    const query = (typeof searchValue === 'string'
        ? searchValue.trim().toLowerCase()
        : state.filters.vehicles.search).trim();
    state.filters.vehicles.search = query;

    if (!silent) showLoader('Loading vehicles…');
    await delay();

    const data = db.Vehicles.filter(row => {
        if (!query) return true;
        return row.PlateNumber.toLowerCase().includes(query) ||
            String(row.MotoristID).includes(query);
    });
    renderVehicles(data);
    updateSummaryCards();
    if (!silent) hideLoader();
}

async function loadViolations(filters = {}, silent = false) {
    const nextFilters = {
        from: filters.from ?? state.filters.violations.from,
        to: filters.to ?? state.filters.violations.to,
        status: filters.status ?? state.filters.violations.status
    };
    state.filters.violations = nextFilters;

    if (!silent) showLoader('Fetching violations…');
    await delay();

    const data = db.Violations.filter(row => {
        if (nextFilters.status && row.Status !== nextFilters.status) return false;
        if (nextFilters.from && row.ViolationDate < nextFilters.from) return false;
        if (nextFilters.to && row.ViolationDate > nextFilters.to) return false;
        return true;
    }).sort((a, b) => b.ViolationDate.localeCompare(a.ViolationDate));
    renderViolations(data);
    updateSummaryCards();
    if (!silent) hideLoader();
}

async function loadFines(filters = {}, silent = false) {
    const nextFilters = {
        status: filters.paymentStatus ?? state.filters.fines.status
    };
    state.filters.fines = nextFilters;

    if (!silent) showLoader('Syncing fines…');
    await delay();
    const data = db.FinesAndPayments.filter(row => {
        if (nextFilters.status && row.PaymentStatus !== nextFilters.status) return false;
        return true;
    }).sort((a, b) => b.DueDate.localeCompare(a.DueDate));
    renderFines(data);
    updateSummaryCards();
    if (!silent) hideLoader();
}

async function loadLto(search = '', silent = false) {
    const keyword = (search || $('#ltoSearch').value || '').trim().toLowerCase();
    if (!silent) showLoader('Loading penalty reference…');
    await delay();
    const data = db.LtoViolations.filter(row => {
        if (!keyword) return true;
        return row.Violation.toLowerCase().includes(keyword) ||
            (row.Law_Reference || '').toLowerCase().includes(keyword);
    });
        renderLto(data);
    if (!silent) hideLoader();
}

async function loadMedical(searchValue, silent = false) {
    const query = (typeof searchValue === 'string'
        ? searchValue.trim().toLowerCase()
        : state.filters.medical.search).trim();
    state.filters.medical.search = query;
    if (!silent) showLoader('Loading medical records…');
    await delay();
    const data = db.Medical.filter(row => {
        if (!query) return true;
        return String(row.MotoristID).includes(query) ||
            (row.MedicalCondition || '').toLowerCase().includes(query) ||
            (row.Vision || '').toLowerCase().includes(query);
    });
    renderMedical(data);
    if (!silent) hideLoader();
}

async function loadInsurance(searchValue, silent = false) {
    const query = (typeof searchValue === 'string'
        ? searchValue.trim().toLowerCase()
        : state.filters.insurance.search).trim();
    state.filters.insurance.search = query;
    if (!silent) showLoader('Loading insurance…');
    await delay();
    const data = db.Insurance.filter(row => {
        if (!query) return true;
        return row.PolicyNumber.toLowerCase().includes(query) ||
            row.Provider.toLowerCase().includes(query) ||
            String(row.VehicleID).includes(query);
    });
    renderInsurance(data);
    if (!silent) hideLoader();
}

async function loadRenewals(filters = {}, silent = false) {
    const nextFilters = {
        search: filters.search ?? state.filters.renewals.search,
        status: filters.status ?? state.filters.renewals.status
    };
    state.filters.renewals = {
        search: nextFilters.search.trim().toLowerCase(),
        status: nextFilters.status
    };
    if (!silent) showLoader('Loading renewals…');
    await delay();
    const data = db.Renewals.filter(row => {
        if (state.filters.renewals.status && row.Status !== state.filters.renewals.status) return false;
        if (!state.filters.renewals.search) return true;
        return String(row.MotoristID).includes(state.filters.renewals.search) ||
            String(row.VehicleID).includes(state.filters.renewals.search);
    });
    renderRenewals(data);
    if (!silent) hideLoader();
}

async function loadDisputes(filters = {}, silent = false) {
    const nextFilters = {
        search: filters.search ?? state.filters.disputes.search,
        status: filters.status ?? state.filters.disputes.status
    };
    state.filters.disputes = {
        search: nextFilters.search.trim().toLowerCase(),
        status: nextFilters.status
    };
    if (!silent) showLoader('Loading disputes…');
    await delay();
    const data = db.Disputes.filter(row => {
        if (state.filters.disputes.status && row.ReviewStatus !== state.filters.disputes.status) return false;
        if (!state.filters.disputes.search) return true;
        return String(row.ViolationID).includes(state.filters.disputes.search) ||
            String(row.MotoristID).includes(state.filters.disputes.search);
    });
    renderDisputes(data);
    if (!silent) hideLoader();
}

// ======= DETAIL MODAL =======
const viewModalOverlay = $('#viewModalOverlay');
const viewModalBody = $('#viewModalBody');

function openViewModal(record) {
    state.viewingRecord = record;
    const fields = [
        ['Motorist ID', record.MotoristID],
        ['Full Name', `${record.LastName}, ${record.FirstName} ${record.MiddleName || ''}`.replace(/\s+/g, ' ').trim()],
        ['License Number', record.LicenseNumber],
        ['License Type', record.LicenseType],
        ['Expiration Date', record.ExpirationDate],
        ['Address', record.Address],
        ['Sex / DOB', `${record.Sex} · ${record.DateOfBirth}`],
        ['Nationality', record.Nationality],
        ['Blood Type', record.BloodType],
        ['DL Codes', record.DLCodes || '—'],
        ['Agency Code', record.AgencyCode || '—'],
        ['Conditions', record.Conditions || '—']
    ];

    viewModalBody.innerHTML = `
        <div class="detail-grid">
            ${fields.map(([label, value]) => `
                <div>
                    <small class="text-muted text-uppercase">${label}</small>
                    <p class="mb-2">${value}</p>
                </div>
            `).join('')}
        </div>
    `;

    viewModalOverlay.classList.remove('hidden');
}

function closeViewModal() {
    state.viewingRecord = null;
    viewModalOverlay.classList.add('hidden');
}

function printViewRecord() {
    if (!state.viewingRecord) return;
    const w = window.open('', '_blank');
    w.document.write(`
        <html>
            <head>
                <title>Motorist Record</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 24px; }
                    h2 { margin-top: 0; }
                    table { width: 100%; border-collapse: collapse; }
                    td { border: 1px solid #999; padding: 8px; }
                    td.label { font-weight: bold; width: 30%; background: #f4f4f4; }
                </style>
            </head>
            <body>
                <h2>Motorist Record</h2>
                <table>
                    ${Object.entries(state.viewingRecord).map(([key, value]) => `
                        <tr>
                            <td class="label">${key}</td>
                            <td>${value ?? ''}</td>
                        </tr>
                    `).join('')}
                </table>
            </body>
        </html>
    `);
    w.document.close();
    w.print();
}

// ======= MODAL HANDLING =======
let currentEntity = null;
const modalOverlay = $('#modalOverlay');
const modalTitle = $('#modalTitle');
const modalForm = $('#modalForm');
const modalBody = $('#modalBody');

function buildViolationOptions(selected = '') {
    return violationOptions.map(v => `<option value="${v}"${selected === v ? ' selected' : ''}>${v}</option>`).join('');
}

function openModal(entity, mode = 'create', data = null) {
    currentEntity = entity;
    modalBody.innerHTML = '';

    if (entity === 'motorist') {
        modalTitle.textContent = mode === 'edit' ? 'Edit Motorist' : 'Add Motorist';
        modalBody.innerHTML = `
          <input type="hidden" name="MotoristID" value="${data?.MotoristID || ''}">
          <div class="form-row">
            <label>Last Name</label>
            <input name="LastName" required value="${data?.LastName || ''}">
          </div>
          <div class="form-row">
            <label>First Name</label>
            <input name="FirstName" required value="${data?.FirstName || ''}">
          </div>
          <div class="form-row">
            <label>Middle Name</label>
            <input name="MiddleName" value="${data?.MiddleName || ''}">
          </div>
          <div class="form-row">
            <label>Nationality</label>
            <input name="Nationality" value="${data?.Nationality || 'Filipino'}">
          </div>
          <div class="form-row">
            <label>Sex</label>
            <select name="Sex" required>
              <option value="">Select</option>
              <option value="Male"${data?.Sex === 'Male' ? ' selected' : ''}>Male</option>
              <option value="Female"${data?.Sex === 'Female' ? ' selected' : ''}>Female</option>
              <option value="Other"${data?.Sex === 'Other' ? ' selected' : ''}>Other</option>
            </select>
          </div>
          <div class="form-row">
            <label>Date of Birth</label>
            <input type="date" name="DateOfBirth" required value="${data?.DateOfBirth || ''}">
          </div>
          <div class="form-row">
            <label>Weight (kg)</label>
            <input type="number" step="0.1" name="Weight" value="${data?.Weight ?? ''}">
          </div>
          <div class="form-row">
            <label>Height (cm)</label>
            <input type="number" step="0.1" name="Height" value="${data?.Height ?? ''}">
          </div>
          <div class="form-row">
            <label>Address</label>
            <input name="Address" required value="${data?.Address || ''}">
          </div>
          <div class="form-row">
            <label>License Number</label>
            <input name="LicenseNumber" required value="${data?.LicenseNumber || ''}">
          </div>
          <div class="form-row">
            <label>Expiration Date</label>
            <input type="date" name="ExpirationDate" required value="${data?.ExpirationDate || ''}">
          </div>
          <div class="form-row">
            <label>Agency Code</label>
            <input name="AgencyCode" value="${data?.AgencyCode || ''}">
          </div>
          <div class="form-row">
            <label>Blood Type</label>
            <select name="BloodType" required>
              <option value="">Select</option>
              <option value="A"${data?.BloodType === 'A' ? ' selected' : ''}>A</option>
              <option value="B"${data?.BloodType === 'B' ? ' selected' : ''}>B</option>
              <option value="AB"${data?.BloodType === 'AB' ? ' selected' : ''}>AB</option>
              <option value="O"${data?.BloodType === 'O' ? ' selected' : ''}>O</option>
            </select>
          </div>
          <div class="form-row">
            <label>Eye Color</label>
            <input name="EyeColor" value="${data?.EyeColor || ''}">
          </div>
          <div class="form-row">
            <label>DL Codes</label>
            <input name="DLCodes" value="${data?.DLCodes || ''}" placeholder="e.g. A,B">
          </div>
          <div class="form-row">
            <label>Conditions</label>
            <textarea name="Conditions" rows="2">${data?.Conditions || ''}</textarea>
          </div>
          <div class="form-row">
            <label>License Type</label>
            <select name="LicenseType" required>
              <option value="">Select</option>
              <option value="Professional"${data?.LicenseType === 'Professional' ? ' selected' : ''}>Professional</option>
              <option value="Non-Professional"${data?.LicenseType === 'Non-Professional' ? ' selected' : ''}>Non-Professional</option>
              <option value="Student"${data?.LicenseType === 'Student' ? ' selected' : ''}>Student</option>
            </select>
          </div>
        `;
    }

    if (entity === 'vehicle') {
        modalTitle.textContent = mode === 'edit' ? 'Edit Vehicle' : 'Add Vehicle';
        modalBody.innerHTML = `
          <input type="hidden" name="VehicleID" value="${data?.VehicleID || ''}">
          <div class="form-row">
            <label>Motorist ID</label>
            <input type="number" name="MotoristID" required value="${data?.MotoristID || ''}">
          </div>
          <div class="form-row">
            <label>Plate Number</label>
            <input name="PlateNumber" required value="${data?.PlateNumber || ''}">
          </div>
          <div class="form-row">
            <label>Chassis Number</label>
            <input name="ChassisNumber" required value="${data?.ChassisNumber || ''}">
          </div>
          <div class="form-row">
            <label>Status</label>
            <select name="Status" required>
              <option value="">Select</option>
              <option value="Active"${data?.Status === 'Active' ? ' selected' : ''}>Active</option>
              <option value="Stolen"${data?.Status === 'Stolen' ? ' selected' : ''}>Stolen</option>
              <option value="Renewal Pending"${data?.Status === 'Renewal Pending' ? ' selected' : ''}>Renewal Pending</option>
              <option value="Expired"${data?.Status === 'Expired' ? ' selected' : ''}>Expired</option>
            </select>
          </div>
        `;
    }

    if (entity === 'violation') {
        modalTitle.textContent = mode === 'edit' ? 'Edit Violation' : 'Add Violation';
        modalBody.innerHTML = `
          <input type="hidden" name="ViolationID" value="${data?.ViolationID || ''}">
          <div class="form-row">
            <label>Motorist ID</label>
            <input type="number" name="MotoristID" required value="${data?.MotoristID || ''}">
          </div>
          <div class="form-row">
            <label>Vehicle ID</label>
            <input type="number" name="VehicleID" required value="${data?.VehicleID || ''}">
          </div>
          <div class="form-row">
            <label>Violation Type</label>
            <select name="ViolationType" required>
              <option value="">Select violation</option>
              ${buildViolationOptions(data?.ViolationType || '')}
            </select>
          </div>
          <div class="form-row">
            <label>Violation Date</label>
            <input type="date" name="ViolationDate" required value="${data?.ViolationDate || ''}">
          </div>
          <div class="form-row">
            <label>Status</label>
            <select name="Status" required>
              <option value="">Select</option>
              <option value="Pending"${data?.Status === 'Pending' ? ' selected' : ''}>Pending</option>
              <option value="Resolved"${data?.Status === 'Resolved' ? ' selected' : ''}>Resolved</option>
              <option value="Rejected"${data?.Status === 'Rejected' ? ' selected' : ''}>Rejected</option>
            </select>
          </div>
        `;
    }

    if (entity === 'fine') {
        modalTitle.textContent = mode === 'edit' ? 'Edit Fine' : 'Add Fine';
        modalBody.innerHTML = `
          <input type="hidden" name="FineID" value="${data?.FineID || ''}">
          <div class="form-row">
            <label>Violation ID</label>
            <input type="number" name="ViolationID" required value="${data?.ViolationID || ''}">
          </div>
          <div class="form-row">
            <label>Amount</label>
            <input type="number" step="0.01" name="Amount" required value="${data?.Amount || ''}">
          </div>
          <div class="form-row">
            <label>Due Date</label>
            <input type="date" name="DueDate" required value="${data?.DueDate || ''}">
          </div>
          <div class="form-row">
            <label>Payment Status</label>
            <select name="PaymentStatus" required>
              <option value="">Select</option>
              <option value="Unpaid"${data?.PaymentStatus === 'Unpaid' ? ' selected' : ''}>Unpaid</option>
              <option value="Paid"${data?.PaymentStatus === 'Paid' ? ' selected' : ''}>Paid</option>
              <option value="Overdue"${data?.PaymentStatus === 'Overdue' ? ' selected' : ''}>Overdue</option>
            </select>
          </div>
          <div class="form-row">
            <label>Payment Date</label>
            <input type="date" name="PaymentDate" value="${data?.PaymentDate || ''}">
          </div>
        `;
    }

    if (entity === 'medical') {
        modalTitle.textContent = mode === 'edit' ? 'Edit Medical Record' : 'Add Medical Record';
        modalBody.innerHTML = `
          <input type="hidden" name="MedicalID" value="${data?.MedicalID || ''}">
          <div class="form-row">
            <label>Motorist ID</label>
            <input type="number" name="MotoristID" required value="${data?.MotoristID || ''}">
          </div>
          <div class="form-row">
            <label>Vision</label>
            <input name="Vision" value="${data?.Vision || ''}">
          </div>
          <div class="form-row">
            <label>Medical Condition</label>
            <textarea name="MedicalCondition" rows="2">${data?.MedicalCondition || ''}</textarea>
          </div>
          <div class="form-row">
            <label>Date of Examination</label>
            <input type="date" name="DateOfExamination" required value="${data?.DateOfExamination || ''}">
          </div>
        `;
    }

    if (entity === 'insurance') {
        modalTitle.textContent = mode === 'edit' ? 'Edit Insurance' : 'Add Insurance';
        modalBody.innerHTML = `
          <input type="hidden" name="InsuranceID" value="${data?.InsuranceID || ''}">
          <div class="form-row">
            <label>Vehicle ID</label>
            <input type="number" name="VehicleID" required value="${data?.VehicleID || ''}">
          </div>
          <div class="form-row">
            <label>Policy Number</label>
            <input name="PolicyNumber" required value="${data?.PolicyNumber || ''}">
          </div>
          <div class="form-row">
            <label>Provider</label>
            <input name="Provider" required value="${data?.Provider || ''}">
          </div>
          <div class="form-row">
            <label>Start Date</label>
            <input type="date" name="StartDate" required value="${data?.StartDate || ''}">
          </div>
          <div class="form-row">
            <label>End Date</label>
            <input type="date" name="EndDate" required value="${data?.EndDate || ''}">
          </div>
          <div class="form-row">
            <label>Premium Amount</label>
            <input type="number" step="0.01" name="PremiumAmount" required value="${data?.PremiumAmount || ''}">
          </div>
          <div class="form-row">
            <label>Status</label>
            <select name="Status" required>
              <option value="">Select</option>
              <option value="Active"${data?.Status === 'Active' ? ' selected' : ''}>Active</option>
              <option value="Pending"${data?.Status === 'Pending' ? ' selected' : ''}>Pending</option>
              <option value="Expired"${data?.Status === 'Expired' ? ' selected' : ''}>Expired</option>
            </select>
          </div>
        `;
    }

    if (entity === 'renewal') {
        modalTitle.textContent = mode === 'edit' ? 'Edit Renewal' : 'Add Renewal';
        modalBody.innerHTML = `
          <input type="hidden" name="RenewalID" value="${data?.RenewalID || ''}">
          <div class="form-row">
            <label>Motorist ID</label>
            <input type="number" name="MotoristID" required value="${data?.MotoristID || ''}">
          </div>
          <div class="form-row">
            <label>Vehicle ID</label>
            <input type="number" name="VehicleID" required value="${data?.VehicleID || ''}">
          </div>
          <div class="form-row">
            <label>Renewal Date</label>
            <input type="date" name="RenewalDate" required value="${data?.RenewalDate || ''}">
          </div>
          <div class="form-row">
            <label>Expiry Date</label>
            <input type="date" name="ExpiryDate" required value="${data?.ExpiryDate || ''}">
          </div>
          <div class="form-row">
            <label>Status</label>
            <select name="Status" required>
              <option value="">Select</option>
              <option value="Pending"${data?.Status === 'Pending' ? ' selected' : ''}>Pending</option>
              <option value="Approved"${data?.Status === 'Approved' ? ' selected' : ''}>Approved</option>
              <option value="Rejected"${data?.Status === 'Rejected' ? ' selected' : ''}>Rejected</option>
            </select>
          </div>
        `;
    }

    if (entity === 'dispute') {
        modalTitle.textContent = mode === 'edit' ? 'Edit Dispute' : 'Add Dispute';
        modalBody.innerHTML = `
          <input type="hidden" name="DisputeID" value="${data?.DisputeID || ''}">
          <div class="form-row">
            <label>Violation ID</label>
            <input type="number" name="ViolationID" required value="${data?.ViolationID || ''}">
          </div>
          <div class="form-row">
            <label>Motorist ID</label>
            <input type="number" name="MotoristID" required value="${data?.MotoristID || ''}">
          </div>
          <div class="form-row">
            <label>Evidence / Notes</label>
            <textarea name="Evidence" rows="2">${data?.Evidence || ''}</textarea>
          </div>
          <div class="form-row">
            <label>Submission Date</label>
            <input type="date" name="SubmissionDate" required value="${data?.SubmissionDate || ''}">
          </div>
          <div class="form-row">
            <label>Review Status</label>
            <select name="ReviewStatus" required>
              <option value="">Select</option>
              <option value="Pending"${data?.ReviewStatus === 'Pending' ? ' selected' : ''}>Pending</option>
              <option value="Under Review"${data?.ReviewStatus === 'Under Review' ? ' selected' : ''}>Under Review</option>
              <option value="Approved"${data?.ReviewStatus === 'Approved' ? ' selected' : ''}>Approved</option>
              <option value="Rejected"${data?.ReviewStatus === 'Rejected' ? ' selected' : ''}>Rejected</option>
            </select>
          </div>
        `;
    }

    modalOverlay.classList.remove('hidden');
}

function closeModal() {
    modalOverlay.classList.add('hidden');
    modalBody.innerHTML = '';
    currentEntity = null;
}

// ======= CRUD HELPERS =======
const entityAdapters = {
    motorist: (data) => ({
        MotoristID: data.MotoristID ? Number(data.MotoristID) : null,
        LastName: data.LastName?.trim() || '',
        FirstName: data.FirstName?.trim() || '',
        MiddleName: data.MiddleName?.trim() || '',
        Nationality: data.Nationality?.trim() || 'Filipino',
        Sex: data.Sex,
        DateOfBirth: data.DateOfBirth,
        Weight: numberOrNull(data.Weight),
        Height: numberOrNull(data.Height),
        Address: data.Address?.trim() || '',
        LicenseNumber: data.LicenseNumber?.trim() || '',
        ExpirationDate: data.ExpirationDate,
        AgencyCode: data.AgencyCode?.trim() || '',
        BloodType: data.BloodType,
        EyeColor: data.EyeColor?.trim() || '',
        DLCodes: data.DLCodes?.trim() || '',
        Conditions: data.Conditions?.trim() || '',
        LicenseType: data.LicenseType
    }),
    vehicle: (data) => ({
        VehicleID: data.VehicleID ? Number(data.VehicleID) : null,
        MotoristID: data.MotoristID ? Number(data.MotoristID) : null,
        PlateNumber: data.PlateNumber?.trim().toUpperCase() || '',
        ChassisNumber: data.ChassisNumber?.trim().toUpperCase() || '',
        Status: data.Status
    }),
    violation: (data) => ({
        ViolationID: data.ViolationID ? Number(data.ViolationID) : null,
        MotoristID: data.MotoristID ? Number(data.MotoristID) : null,
        VehicleID: data.VehicleID ? Number(data.VehicleID) : null,
        ViolationType: data.ViolationType?.trim() || '',
        ViolationDate: data.ViolationDate,
        Status: data.Status
    }),
    fine: (data) => ({
        FineID: data.FineID ? Number(data.FineID) : null,
        ViolationID: data.ViolationID ? Number(data.ViolationID) : null,
        Amount: Number(data.Amount || 0),
        DueDate: data.DueDate,
        PaymentStatus: data.PaymentStatus,
        PaymentDate: data.PaymentStatus === 'Paid'
            ? (data.PaymentDate || new Date().toISOString().slice(0, 10))
            : (data.PaymentDate || '')
    }),
    medical: (data) => ({
        MedicalID: data.MedicalID ? Number(data.MedicalID) : null,
        MotoristID: data.MotoristID ? Number(data.MotoristID) : null,
        Vision: data.Vision?.trim() || '',
        MedicalCondition: data.MedicalCondition?.trim() || '',
        DateOfExamination: data.DateOfExamination
    }),
    insurance: (data) => ({
        InsuranceID: data.InsuranceID ? Number(data.InsuranceID) : null,
        VehicleID: data.VehicleID ? Number(data.VehicleID) : null,
        PolicyNumber: data.PolicyNumber?.trim().toUpperCase() || '',
        Provider: data.Provider?.trim() || '',
        StartDate: data.StartDate,
        EndDate: data.EndDate,
        PremiumAmount: Number(data.PremiumAmount || 0),
        Status: data.Status
    }),
    renewal: (data) => ({
        RenewalID: data.RenewalID ? Number(data.RenewalID) : null,
        MotoristID: data.MotoristID ? Number(data.MotoristID) : null,
        VehicleID: data.VehicleID ? Number(data.VehicleID) : null,
        RenewalDate: data.RenewalDate,
        ExpiryDate: data.ExpiryDate,
        Status: data.Status
    }),
    dispute: (data) => ({
        DisputeID: data.DisputeID ? Number(data.DisputeID) : null,
        ViolationID: data.ViolationID ? Number(data.ViolationID) : null,
        MotoristID: data.MotoristID ? Number(data.MotoristID) : null,
        Evidence: data.Evidence?.trim() || '',
        SubmissionDate: data.SubmissionDate,
        ReviewStatus: data.ReviewStatus
    })
};

function ensureExists(table, pkValue) {
    const pk = tablePrimaryKeys[table];
    return db[table].some(row => Number(row[pk]) === Number(pkValue));
}

function saveMotorist(record) {
    const pk = tablePrimaryKeys.Motorists;
    const normalizedLicense = record.LicenseNumber.toUpperCase();
    const duplicate = db.Motorists.some(row =>
        row.LicenseNumber.toUpperCase() === normalizedLicense &&
        row[pk] !== record[pk]
    );
    if (duplicate) throw new Error('License number already exists.');

    if (record[pk]) {
        const idx = db.Motorists.findIndex(row => row[pk] === record[pk]);
        if (idx === -1) throw new Error('Motorist not found.');
        db.Motorists[idx] = { ...db.Motorists[idx], ...record, LicenseNumber: normalizedLicense };
        return clone(db.Motorists[idx]);
    }
    const newRecord = { ...record, [pk]: nextId('Motorists'), LicenseNumber: normalizedLicense };
    db.Motorists.push(newRecord);
    return clone(newRecord);
}

function saveVehicle(record) {
    if (!ensureExists('Motorists', record.MotoristID)) {
        throw new Error('Motorist ID does not exist.');
    }
    const pk = tablePrimaryKeys.Vehicles;
    const duplicatePlate = db.Vehicles.some(row =>
        row.PlateNumber === record.PlateNumber && row[pk] !== record[pk]
    );
    if (duplicatePlate) throw new Error('Plate number already exists.');

    const duplicateChassis = db.Vehicles.some(row =>
        row.ChassisNumber === record.ChassisNumber && row[pk] !== record[pk]
    );
    if (duplicateChassis) throw new Error('Chassis number already exists.');

    if (record[pk]) {
        const idx = db.Vehicles.findIndex(row => row[pk] === record[pk]);
        if (idx === -1) throw new Error('Vehicle not found.');
        db.Vehicles[idx] = { ...db.Vehicles[idx], ...record };
        return clone(db.Vehicles[idx]);
    }
    const newRecord = { ...record, [pk]: nextId('Vehicles') };
    db.Vehicles.push(newRecord);
    return clone(newRecord);
}

function saveViolation(record) {
    if (!ensureExists('Motorists', record.MotoristID)) {
        throw new Error('Motorist ID does not exist.');
    }
    if (!ensureExists('Vehicles', record.VehicleID)) {
        throw new Error('Vehicle ID does not exist.');
    }
    const pk = tablePrimaryKeys.Violations;
    if (record[pk]) {
        const idx = db.Violations.findIndex(row => row[pk] === record[pk]);
        if (idx === -1) throw new Error('Violation not found.');
        db.Violations[idx] = { ...db.Violations[idx], ...record };
        return clone(db.Violations[idx]);
    }
    const newRecord = { ...record, [pk]: nextId('Violations') };
    db.Violations.push(newRecord);
    return clone(newRecord);
}

function saveFine(record) {
    if (!ensureExists('Violations', record.ViolationID)) {
        throw new Error('Violation ID does not exist.');
    }
    const pk = tablePrimaryKeys.FinesAndPayments;
    if (record[pk]) {
        const idx = db.FinesAndPayments.findIndex(row => row[pk] === record[pk]);
        if (idx === -1) throw new Error('Fine not found.');
        db.FinesAndPayments[idx] = { ...db.FinesAndPayments[idx], ...record };
        return clone(db.FinesAndPayments[idx]);
    }
    const newRecord = { ...record, [pk]: nextId('FinesAndPayments') };
    db.FinesAndPayments.push(newRecord);
    return clone(newRecord);
}

function saveMedical(record) {
    if (!ensureExists('Motorists', record.MotoristID)) {
        throw new Error('Motorist ID does not exist.');
    }
    const pk = tablePrimaryKeys.Medical;
    if (record[pk]) {
        const idx = db.Medical.findIndex(row => row[pk] === record[pk]);
        if (idx === -1) throw new Error('Medical record not found.');
        db.Medical[idx] = { ...db.Medical[idx], ...record };
        return clone(db.Medical[idx]);
    }
    const newRecord = { ...record, [pk]: nextId('Medical') };
    db.Medical.push(newRecord);
    return clone(newRecord);
}

function saveInsurance(record) {
    if (!ensureExists('Vehicles', record.VehicleID)) {
        throw new Error('Vehicle ID does not exist.');
    }
    const pk = tablePrimaryKeys.Insurance;
    const duplicatePolicy = db.Insurance.some(row =>
        row.PolicyNumber === record.PolicyNumber && row[pk] !== record[pk]
    );
    if (duplicatePolicy) throw new Error('Policy number already exists.');

    if (record[pk]) {
        const idx = db.Insurance.findIndex(row => row[pk] === record[pk]);
        if (idx === -1) throw new Error('Insurance record not found.');
        db.Insurance[idx] = { ...db.Insurance[idx], ...record };
        return clone(db.Insurance[idx]);
    }
    const newRecord = { ...record, [pk]: nextId('Insurance') };
    db.Insurance.push(newRecord);
    return clone(newRecord);
}

function saveRenewal(record) {
    if (!ensureExists('Motorists', record.MotoristID)) throw new Error('Motorist ID does not exist.');
    if (!ensureExists('Vehicles', record.VehicleID)) throw new Error('Vehicle ID does not exist.');
    const pk = tablePrimaryKeys.Renewals;
    if (record[pk]) {
        const idx = db.Renewals.findIndex(row => row[pk] === record[pk]);
        if (idx === -1) throw new Error('Renewal not found.');
        db.Renewals[idx] = { ...db.Renewals[idx], ...record };
        return clone(db.Renewals[idx]);
    }
    const newRecord = { ...record, [pk]: nextId('Renewals') };
    db.Renewals.push(newRecord);
    return clone(newRecord);
}

function saveDispute(record) {
    if (!ensureExists('Violations', record.ViolationID)) throw new Error('Violation ID does not exist.');
    if (!ensureExists('Motorists', record.MotoristID)) throw new Error('Motorist ID does not exist.');
    const pk = tablePrimaryKeys.Disputes;
    if (record[pk]) {
        const idx = db.Disputes.findIndex(row => row[pk] === record[pk]);
        if (idx === -1) throw new Error('Dispute not found.');
        db.Disputes[idx] = { ...db.Disputes[idx], ...record };
        return clone(db.Disputes[idx]);
    }
    const newRecord = { ...record, [pk]: nextId('Disputes') };
    db.Disputes.push(newRecord);
    return clone(newRecord);
}

async function saveEntity(entity, formData) {
    const adapter = entityAdapters[entity];
    if (!adapter) throw new Error(`Unsupported entity: ${entity}`);
    const payload = adapter(formData);
    let result;
    switch (entity) {
        case 'motorist':
            result = saveMotorist(payload);
            break;
        case 'vehicle':
            result = saveVehicle(payload);
            break;
        case 'violation':
            result = saveViolation(payload);
            break;
        case 'fine':
            result = saveFine(payload);
            break;
        case 'medical':
            result = saveMedical(payload);
            break;
        case 'insurance':
            result = saveInsurance(payload);
            break;
        case 'renewal':
            result = saveRenewal(payload);
            break;
        case 'dispute':
            result = saveDispute(payload);
            break;
        default:
            throw new Error('Unknown entity.');
    }
    updateSummaryCards();
    return result;
}

function removeFinesByViolation(violationId) {
    db.FinesAndPayments = db.FinesAndPayments.filter(f => f.ViolationID !== violationId);
}

function deleteViolationCascade(id) {
    db.Disputes = db.Disputes.filter(d => d.ViolationID !== id);
    db.Violations = db.Violations.filter(v => v.ViolationID !== id);
    removeFinesByViolation(id);
}

function deleteVehicleCascade(id) {
    db.Insurance = db.Insurance.filter(ins => ins.VehicleID !== id);
    db.Renewals = db.Renewals.filter(r => r.VehicleID !== id);
    const violations = db.Violations.filter(v => v.VehicleID === id).map(v => v.ViolationID);
    violations.forEach(deleteViolationCascade);
    db.Vehicles = db.Vehicles.filter(v => v.VehicleID !== id);
}

function deleteMotoristCascade(id) {
    db.Motorists = db.Motorists.filter(m => m.MotoristID !== id);
    db.Medical = db.Medical.filter(med => med.MotoristID !== id);
    const motoristVehicles = db.Vehicles.filter(v => v.MotoristID === id).map(v => v.VehicleID);
    motoristVehicles.forEach(deleteVehicleCascade);
    const motoristViolations = db.Violations.filter(v => v.MotoristID === id).map(v => v.ViolationID);
    motoristViolations.forEach(deleteViolationCascade);
    db.Renewals = db.Renewals.filter(r => r.MotoristID !== id);
    db.Disputes = db.Disputes.filter(d => d.MotoristID !== id);
}

function deleteFineRecord(id) {
    db.FinesAndPayments = db.FinesAndPayments.filter(f => f.FineID !== id);
}

function deleteMedicalRecord(id) {
    db.Medical = db.Medical.filter(m => m.MedicalID !== id);
}

function deleteInsuranceRecord(id) {
    db.Insurance = db.Insurance.filter(m => m.InsuranceID !== id);
}

function deleteRenewalRecord(id) {
    db.Renewals = db.Renewals.filter(m => m.RenewalID !== id);
}

function deleteDisputeRecord(id) {
    db.Disputes = db.Disputes.filter(m => m.DisputeID !== id);
}

async function deleteEntity(entity, id) {
    const numericId = Number(id);
    switch (entity) {
        case 'motorist':
            deleteMotoristCascade(numericId);
            break;
        case 'vehicle':
            deleteVehicleCascade(numericId);
            break;
        case 'violation':
            deleteViolationCascade(numericId);
            break;
        case 'fine':
            deleteFineRecord(numericId);
            break;
        case 'medical':
            deleteMedicalRecord(numericId);
            break;
        case 'insurance':
            deleteInsuranceRecord(numericId);
            break;
        case 'renewal':
            deleteRenewalRecord(numericId);
            break;
        case 'dispute':
            deleteDisputeRecord(numericId);
            break;
        default:
            throw new Error('Unsupported delete entity.');
    }
    updateSummaryCards();
}

async function fetchSingleEntity(entity, id) {
    const table = entityToTable[entity];
    if (!table) throw new Error('Unsupported entity.');
    const pk = tablePrimaryKeys[table];
    const record = db[table].find(row => Number(row[pk]) === Number(id));
    if (!record) throw new Error('Record not found.');
    return clone(record);
}

// ======= EXPORT / PRINT =======
function exportMotoristsCsv() {
    const rows = state.caches.motoristsFiltered;
    if (!rows.length) {
        showToast('No records to export', 'error');
        return;
    }
    const headers = ['MotoristID', 'LastName', 'FirstName', 'MiddleName', 'LicenseNumber', 'LicenseType', 'ExpirationDate', 'Address'];
    const csv = [
        headers.join(','),
        ...rows.map(row => headers.map(h => `"${String(row[h] ?? '').replace(/"/g, '""')}"`).join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `motorists_${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Exported CSV successfully');
}

function printMotoristsFiltered() {
    const rows = state.caches.motoristsFiltered;
    const w = window.open('', '_blank');
    w.document.write(`
        <html>
            <head>
                <title>Motorists Report</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 24px; }
                    table { width: 100%; border-collapse: collapse; }
                    th, td { border: 1px solid #999; padding: 8px; text-align: left; }
                    th { background: #efefef; text-transform: uppercase; }
                </style>
            </head>
            <body>
                <h2>Motorists (${rows.length})</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th><th>License</th><th>Name</th><th>License Type</th><th>Expires</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows.map(r => `
                            <tr>
                                <td>${r.MotoristID}</td>
                                <td>${r.LicenseNumber}</td>
                                <td>${r.LastName}, ${r.FirstName} ${r.MiddleName || ''}</td>
                                <td>${r.LicenseType}</td>
                                <td>${r.ExpirationDate}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </body>
        </html>
    `);
    w.document.close();
    w.print();
}

// ======= EVENT BINDING =======
function initEvents() {
    // Motorists
    bindClick('#reloadMotorists', () => {
        state.pagination.motorists.page = 1;
        loadMotorists();
    });
    bindKeyup('#motoristSearch', (e) => {
        if (e.key === 'Enter') {
            state.pagination.motorists.page = 1;
            loadMotorists({ search: e.target.value });
        }
    });
    const motoristLicenseFilter = $('#motoristLicenseFilter');
    if (motoristLicenseFilter) {
        motoristLicenseFilter.addEventListener('change', (e) => {
            state.pagination.motorists.page = 1;
            loadMotorists({ license: e.target.value });
        });
    }
    bindClick('#motoristPrevBtn', () => {
        if (state.pagination.motorists.page > 1) {
            state.pagination.motorists.page -= 1;
            loadMotorists({}, true);
            renderMotorists(state.caches.motoristsFiltered.slice(
                (state.pagination.motorists.page - 1) * state.pagination.motorists.size,
                state.pagination.motorists.page * state.pagination.motorists.size
            ));
            renderMotoristPagination(Math.max(1, Math.ceil(state.caches.motoristsFiltered.length / state.pagination.motorists.size)), state.caches.motoristsFiltered.length);
        }
    });
    bindClick('#motoristNextBtn', () => {
        const totalPages = Math.max(1, Math.ceil(state.caches.motoristsFiltered.length / state.pagination.motorists.size));
        if (state.pagination.motorists.page < totalPages) {
            state.pagination.motorists.page += 1;
            loadMotorists({}, true);
            renderMotorists(state.caches.motoristsFiltered.slice(
                (state.pagination.motorists.page - 1) * state.pagination.motorists.size,
                state.pagination.motorists.page * state.pagination.motorists.size
            ));
            renderMotoristPagination(totalPages, state.caches.motoristsFiltered.length);
        }
    });
    bindClick('#exportMotoristsBtn', exportMotoristsCsv);
    bindClick('#printMotoristsBtn', printMotoristsFiltered);

    // Vehicles
    bindClick('#reloadVehicles', () => loadVehicles($('#vehicleSearch')?.value || ''));
    bindKeyup('#vehicleSearch', (e) => {
        if (e.key === 'Enter') loadVehicles(e.target.value);
    });

    // Violations
    bindClick('#reloadViolations', () => {
        const filters = {
            from: $('#violationFrom')?.value || '',
            to: $('#violationTo')?.value || '',
            status: $('#violationStatusFilter')?.value || ''
        };
        loadViolations(filters);
    });

    // Fines
    bindClick('#reloadFines', () => {
        const filters = {
            paymentStatus: $('#finePaymentStatusFilter')?.value || ''
        };
        loadFines(filters);
    });

    // LTO reference
    bindClick('#reloadLto', () => loadLto($('#ltoSearch')?.value || ''));
    bindKeyup('#ltoSearch', (e) => {
        if (e.key === 'Enter') loadLto(e.target.value);
    });

    // Medical
    bindClick('#reloadMedical', () => loadMedical($('#medicalSearch')?.value || ''));
    bindKeyup('#medicalSearch', (e) => {
        if (e.key === 'Enter') loadMedical(e.target.value);
    });

    // Insurance
    bindClick('#reloadInsurance', () => loadInsurance($('#insuranceSearch')?.value || ''));
    bindKeyup('#insuranceSearch', (e) => {
        if (e.key === 'Enter') loadInsurance(e.target.value);
    });

    // Renewals
    bindClick('#reloadRenewals', () => {
        loadRenewals({
            search: $('#renewalSearch')?.value || '',
            status: $('#renewalStatusFilter')?.value || ''
        });
    });

    // Disputes
    bindClick('#reloadDisputes', () => {
        loadDisputes({
            search: $('#disputeSearch')?.value || '',
            status: $('#disputeStatusFilter')?.value || ''
        });
    });

    // Add buttons
    bindClick('#addMotoristBtn', () => openModal('motorist'));
    bindClick('#addVehicleBtn', () => openModal('vehicle'));
    bindClick('#addViolationBtn', () => openModal('violation'));
    bindClick('#addFineBtn', () => openModal('fine'));
    bindClick('#addMedicalBtn', () => openModal('medical'));
    bindClick('#addInsuranceBtn', () => openModal('insurance'));
    bindClick('#addRenewalBtn', () => openModal('renewal'));
    bindClick('#addDisputeBtn', () => openModal('dispute'));

    // Table events
    const sectionHandlers = [
        { selector: '#motorists-section', entity: 'motorist' },
        { selector: '#vehicles-section', entity: 'vehicle' },
        { selector: '#violations-section', entity: 'violation' },
        { selector: '#fines-section', entity: 'fine' },
        { selector: '#medical-section', entity: 'medical' },
        { selector: '#insurance-section', entity: 'insurance' },
        { selector: '#renewals-section', entity: 'renewal' },
        { selector: '#disputes-section', entity: 'dispute' }
    ];

    sectionHandlers.forEach(({ selector, entity }) => {
        const section = $(selector);
        if (!section) return;
        section.addEventListener('click', async (e) => {
        const btn = e.target.closest('button[data-action]');
        if (!btn) return;
        const id = btn.dataset.id;
        const action = btn.dataset.action;
            try {
                if (action === `edit-${entity}`) {
                    const data = await fetchSingleEntity(entity, id);
                    openModal(entity, 'edit', data);
                }
                if (action === `delete-${entity}`) {
                    if (!confirm('Delete this record?')) return;
                    await deleteEntity(entity, id);
                    showToast('Record deleted');
                    refreshAfterChange(entity);
                }
                if (action === 'view-motorist') {
                    const data = await fetchSingleEntity('motorist', id);
                    openViewModal(data);
                }
            } catch (err) {
                console.error(err);
                showToast(err.message || 'Action failed', 'error');
            }
        });
    });

    // Modals
    bindClick('#modalCloseBtn', closeModal);
    bindClick('#modalCancelBtn', closeModal);
    bindClick('#viewModalCloseBtn', closeViewModal);
    bindClick('#viewModalCloseBtnFooter', closeViewModal);
    bindClick('#viewModalPrintBtn', printViewRecord);

    modalForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const entity = currentEntity;
        if (!entity) return;

        const formData = Object.fromEntries(new FormData(modalForm).entries());

        try {
            await saveEntity(entity, formData);
            showToast('Saved successfully');
            closeModal();
            refreshAfterChange(entity);
        } catch (err) {
            console.error(err);
            showToast(err.message || 'Failed to save data', 'error');
        }
    });
}

function refreshAfterChange(entity) {
    switch (entity) {
        case 'motorist':
            state.pagination.motorists.page = 1;
            loadMotorists();
            break;
        case 'vehicle':
            loadVehicles(state.filters.vehicles.search);
            break;
        case 'violation':
            loadViolations(state.filters.violations);
            break;
        case 'fine':
            loadFines({ paymentStatus: state.filters.fines.status });
            break;
        case 'medical':
            loadMedical(state.filters.medical.search);
            break;
        case 'insurance':
            loadInsurance(state.filters.insurance.search);
            break;
        case 'renewal':
            loadRenewals(state.filters.renewals);
            break;
        case 'dispute':
            loadDisputes(state.filters.disputes);
            break;
        default:
            break;
    }
}


// ======= INIT =======
document.addEventListener('DOMContentLoaded', async () => {
    initTabs();
    initEvents();
    showLoader('Launching console…');
    await delay(400);
    await loadMotorists({}, true);
    await loadVehicles('', true);
    await loadViolations({}, true);
    await loadFines({}, true);
    await loadLto('', true);
    await loadMedical('', true);
    await loadInsurance('', true);
    await loadRenewals({}, true);
    await loadDisputes({}, true);
    hideLoader();
    renderMotorists(state.caches.motoristsFiltered.slice(0, state.pagination.motorists.size));
    renderMotoristPagination(Math.max(1, Math.ceil(state.caches.motoristsFiltered.length / state.pagination.motorists.size)), state.caches.motoristsFiltered.length);
});

