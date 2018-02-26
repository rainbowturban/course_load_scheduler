package org.dselent.course_load_scheduler.client.presenter.impl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.dselent.course_load_scheduler.client.action.LoadAddCourseAction;
import org.dselent.course_load_scheduler.client.action.LoadEditCourseAction;
import org.dselent.course_load_scheduler.client.action.LoadHomePageAction;
import org.dselent.course_load_scheduler.client.action.LoadScheduleAction;
import org.dselent.course_load_scheduler.client.action.LoadViewCoursesAction;
import org.dselent.course_load_scheduler.client.action.ManageUserPageAction;
import org.dselent.course_load_scheduler.client.action.SendGetCourseListAction;
import org.dselent.course_load_scheduler.client.action.SendRemoveCourseAction;
import org.dselent.course_load_scheduler.client.event.LoadAddCourseEvent;
import org.dselent.course_load_scheduler.client.event.LoadEditCourseEvent;
import org.dselent.course_load_scheduler.client.event.LoadHomePageEvent;
import org.dselent.course_load_scheduler.client.event.LoadScheduleEvent;
import org.dselent.course_load_scheduler.client.event.LoadViewCoursesEvent;
import org.dselent.course_load_scheduler.client.event.ManageUserPageEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveGetCourseListEvent;
import org.dselent.course_load_scheduler.client.event.SendGetCourseListEvent;
import org.dselent.course_load_scheduler.client.event.SendRemoveCourseEvent;
import org.dselent.course_load_scheduler.client.model.CourseInfo;
import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.presenter.ViewCoursesPresenter;
import org.dselent.course_load_scheduler.client.view.ViewCoursesView;

import com.google.gwt.core.shared.GWT;
import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.StackPanel;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.inject.Inject;



public class ViewCoursesPresenterImpl extends BasePresenterImpl implements ViewCoursesPresenter{

	private IndexPresenter parentPresenter;
	private ViewCoursesView view;
	
	private List<CourseInfo> courses = new ArrayList<CourseInfo>();		
	//private User user = new User();

	@Inject
	public ViewCoursesPresenterImpl(IndexPresenter parentPresenter, ViewCoursesView view)
	{
		this.view = view;
		this.parentPresenter = parentPresenter;
		view.setPresenter(this);
	}
	
	@Override
	public void onLoadViewCourses(LoadViewCoursesEvent evt) {
		retrieveCourses();
		
		//hides buttons if not an admin
		//specifies for both cases, since the page brings over what it had been last time
		if(!(user.getAccountTypeId() == 2)) {// 2 == Admin user
			view.getRemoveCourseButton().setVisible(false);
			view.getEditCourseButton().setVisible(false);
			view.getAddCourseButton().setVisible(false);
		}
		else {
			view.getRemoveCourseButton().setVisible(true);
			view.getEditCourseButton().setVisible(true);
			view.getAddCourseButton().setVisible(true);
		}
		
		
		this.go(parentPresenter.getView().getViewRootPanel());
	}
	
	@Override
	public void onReceiveGetCourseList(ReceiveGetCourseListEvent evt) {
		courses = evt.getAction().getCourseList();
		fillCourses();
		
		parentPresenter.hideLoadScreen();
	}
	

	@Override
	public void init()
	{
		bind();
	}

	@Override
	public void bind()
	{
		HandlerRegistration registration;

		//events for when this page is loaded
		registration = eventBus.addHandler(LoadViewCoursesEvent.TYPE, this);
		eventBusRegistration.put(LoadViewCoursesEvent.TYPE, registration);
		
		registration = eventBus.addHandler(ReceiveGetCourseListEvent.TYPE, this);
		eventBusRegistration.put(ReceiveGetCourseListEvent.TYPE, registration);
	}

	@Override
	public void go(HasWidgets container) {
		container.clear();
		container.add(view.getWidgetContainer());
	}

	//returns the view for the presenter
	@Override
	public ViewCoursesView getView() {
		return view;
	}

	@Override
	public IndexPresenter getParentPresenter()
	{
		return parentPresenter;
	}

	@Override
	public void setParentPresenter(IndexPresenter parentPresenter)
	{
		this.parentPresenter = parentPresenter;
	}


	//gets information about courses to fill the page with
	@Override
	public void retrieveCourses() {
		//fires event to get courses
		SendGetCourseListEvent evt = new SendGetCourseListEvent(new SendGetCourseListAction());
		eventBus.fireEvent(evt);
		System.out.println("Fired Event!");
		GWT.log("Fired Event!");
		parentPresenter.showLoadScreen();
	}

	//injects the code for the variable element of the page into
	@Override
	public void fillCourses() {
		//retrieveCourses();
		StackPanel panel = view.getCourseList();
		panel.clear();

		Iterator<CourseInfo> iterator = courses.iterator();

		while(iterator.hasNext()) {
			CourseInfo courseInfo = iterator.next();

			//create label and add it to the course list
			VerticalPanel vp = new VerticalPanel();
			vp.add(new Label("Required Frequency: " + courseInfo.getFrequency()));
			
			Label id = new Label("" + courseInfo.getCoursesId());
			//id.setVisible(false);
			vp.add(id);
			
			panel.add(vp, courseInfo.getCoursesNumber() +": "+ courseInfo.getCoursesTitle());
		}
	}


	//loads the page to edit with the provided index/course
	@Override
	public void loadEditPage() {
		int index = view.getCourseList().getSelectedIndex();//get index of course to edit
		if(index >= 0) {//-1 when nothing is selected			
			Iterator<CourseInfo> ci = courses.listIterator(index);
			CourseInfo course = ci.next();
			
			LoadEditCourseAction action = new LoadEditCourseAction(course);
			LoadEditCourseEvent evt = new LoadEditCourseEvent(action);
			eventBus.fireEvent(evt);
		}
	}

	//loads the page to add a course
	@Override
	public void loadAddPage() {		
		eventBus.fireEvent(new LoadAddCourseEvent(new LoadAddCourseAction()));
	}


	//sends the index of a course to be removed from the database.
	//returns true if it was removed successfully, false otherwise.
	@Override
	public void removeCourse() {
		int index = view.getCourseList().getSelectedIndex();//what is to be removed? get the index.

		if(index >= 0) {
			Iterator<CourseInfo> ci = courses.listIterator(index);
			
			int i = ci.next().getCoursesId();
			
			eventBus.fireEvent(new SendRemoveCourseEvent(new SendRemoveCourseAction(i)));
			
			boolean success = true;//this will be the return value from the request

			if(success) {
				view.getCourseList().remove(index);
			}
		}
	}

	//NAV BAR STUFF
	//loads the home page
	@Override
	public void loadHomePage() {
		eventBus.fireEvent(new LoadHomePageEvent(new LoadHomePageAction()));
	}

	//loads schedule page
	@Override
	public void loadSchedulePage() {
		eventBus.fireEvent(new LoadScheduleEvent(new LoadScheduleAction()));
	}
	
	//loads schedule page
	@Override
	public void loadViewCoursesPage() {
		eventBus.fireEvent(new LoadViewCoursesEvent(new LoadViewCoursesAction())); 
	}

	//loads account page
	@Override
	public void loadAccountPage() {
		eventBus.fireEvent(new ManageUserPageEvent(new ManageUserPageAction()));
	}

}
