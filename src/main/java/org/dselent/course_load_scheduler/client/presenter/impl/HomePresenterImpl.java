package org.dselent.course_load_scheduler.client.presenter.impl;

import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.view.HomeView;

import java.util.Iterator;
import java.util.List;

import org.dselent.course_load_scheduler.client.action.SendGetFacultyAction;
import org.dselent.course_load_scheduler.client.action.LoadHomePageAction;
import org.dselent.course_load_scheduler.client.action.LoadScheduleAction;
import org.dselent.course_load_scheduler.client.action.LoadViewCoursesAction;
import org.dselent.course_load_scheduler.client.action.ManageUserPageAction;
import org.dselent.course_load_scheduler.client.event.SendGetFacultyEvent;
import org.dselent.course_load_scheduler.client.event.LoadHomePageEvent;
import org.dselent.course_load_scheduler.client.event.LoadScheduleEvent;
import org.dselent.course_load_scheduler.client.event.LoadViewCoursesEvent;
import org.dselent.course_load_scheduler.client.event.ManageUserPageEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveGetFacultyEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveGetFrequenciesEvent;
import org.dselent.course_load_scheduler.client.model.Faculty;
import org.dselent.course_load_scheduler.client.model.SectionsInfo;
import org.dselent.course_load_scheduler.client.presenter.HomePresenter;

import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.ui.Grid;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.inject.Inject;

public class HomePresenterImpl extends BasePresenterImpl implements HomePresenter{

	private IndexPresenter parentPresenter;
	private HomeView view;

	private boolean adminUser = false;

	@Inject
	public HomePresenterImpl(IndexPresenter parentPresenter, HomeView view)
	{
		this.view = view;
		this.parentPresenter = parentPresenter;
		view.setPresenter(this);

	}
	@Override
	public void bind()
	{
		HandlerRegistration registration;

		registration = eventBus.addHandler(LoadHomePageEvent.TYPE, this);
		eventBusRegistration.put(LoadHomePageEvent.TYPE, registration);
		eventBusRegistration.put(ReceiveGetFacultyEvent.TYPE, eventBus.addHandler(ReceiveGetFacultyEvent.TYPE, this));
	}

	public IndexPresenter getParentPresenter() {
		return parentPresenter;
	}
	public HomeView getView() {
		return view;
	}
	@Override
	public void go(HasWidgets container)
	{
		container.clear();
		container.add(view.getWidgetContainer());
	}

	@Override
	public void init()
	{
		bind();
	}

	@Override
	public void onLoadHomePage(LoadHomePageEvent evt) {
		populateFacultyList();
		adminUser = evt.getAction().isAdminUser();
		this.go(parentPresenter.getView().getViewRootPanel());
	}


	/**
	 * Fills the faculty list panels with faculty and the courses they are scheduled to teach
	 */
	private void populateFacultyList() {
		//Get all the faculty
		List<Faculty> facultyList = retreiveFacultyList();

		VerticalPanel facultyVertPanel = view.getFacultyListVerticalPanel();
		Iterator<Faculty> fIterator = facultyList.iterator();

		//iterate through the list of faculty
		while(fIterator.hasNext()) {
			Faculty f = fIterator.next();
			List<SectionsInfo> sectionList = retreiveOneFacultySectionInfo(f.getId());
			HorizontalPanel courseList = new HorizontalPanel();

			Label name = new Label("" + f.getLastName() + ", " + f.getFirstName());
			Label numCourses;
			Label courseInfo;
			//Check if the faculty has courses assigned
			if(sectionList.isEmpty()) {
				//Faculty has no courses, but we still need to list them, so make empty labels and continue
				numCourses = new Label("(0)");
				courseInfo = new Label("");
				//Add to the faculty's course list
				courseList.add(numCourses);
				courseList.add(name);
				courseList.add(new Label(""));
				//Add to the main list
				facultyVertPanel.add(courseList);
				continue;
			}else {
				numCourses = new Label("(" + sectionList.size() + ")");
			}

			courseList.add(numCourses);
			courseList.add(name);
			Iterator<SectionsInfo> sIterator = sectionList.iterator();

			//iterate through the list of sections for a single faculty
			while(sIterator.hasNext()) {
				SectionsInfo s = sIterator.next();
				courseInfo = new Label("" + s.getCoursesTitle() + "  " + s.getTermsName());
				courseList.add(courseInfo);
			}
			facultyVertPanel.add(courseList);
		}

	}
	private List<Faculty> retreiveFacultyList() {
		//Sends event to DB to fetch frequencies
		eventBus.fireEvent(new SendGetFacultyEvent(new SendGetFacultyAction()));

		return null;
	}
	public void setParentPresenter(IndexPresenter parentPresenter) {
		this.parentPresenter = parentPresenter;
	}

	@Override
	public void loadAccountPage() {
		eventBus.fireEvent(new ManageUserPageEvent(new ManageUserPageAction(adminUser)));
	}

	@Override
	public void loadSchedulePage() {
		eventBus.fireEvent(new LoadScheduleEvent(new LoadScheduleAction(adminUser)));
	}

	@Override
	public void loadViewCoursesPage() {
		eventBus.fireEvent(new LoadViewCoursesEvent(new LoadViewCoursesAction(adminUser))); 
	}

	@Override
	public void loadHomePage() {
		eventBus.fireEvent(new LoadHomePageEvent(new LoadHomePageAction(adminUser)));
	}

}
