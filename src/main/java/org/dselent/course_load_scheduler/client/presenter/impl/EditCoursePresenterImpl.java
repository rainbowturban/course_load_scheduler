package org.dselent.course_load_scheduler.client.presenter.impl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.dselent.course_load_scheduler.client.action.LoadAddSectionAction;
import org.dselent.course_load_scheduler.client.action.LoadEditSectionAction;
import org.dselent.course_load_scheduler.client.action.LoadViewCoursesAction;
import org.dselent.course_load_scheduler.client.action.SendEditCourseAction;
import org.dselent.course_load_scheduler.client.action.SendGetFrequenciesAction;
import org.dselent.course_load_scheduler.client.action.SendGetSectionsAction;
import org.dselent.course_load_scheduler.client.action.SendRemoveSectionAction;
import org.dselent.course_load_scheduler.client.event.LoadAddSectionEvent;
import org.dselent.course_load_scheduler.client.event.LoadEditCourseEvent;
import org.dselent.course_load_scheduler.client.event.LoadEditSectionEvent;
import org.dselent.course_load_scheduler.client.event.LoadViewCoursesEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveGetFrequenciesEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveGetSectionsEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveGetTermsEvent;
import org.dselent.course_load_scheduler.client.event.SendEditCourseEvent;
import org.dselent.course_load_scheduler.client.event.SendGetFrequenciesEvent;
import org.dselent.course_load_scheduler.client.event.SendGetSectionsEvent;
import org.dselent.course_load_scheduler.client.event.SendRemoveSectionEvent;
import org.dselent.course_load_scheduler.client.model.CourseInfo;
import org.dselent.course_load_scheduler.client.model.CourseSections;
import org.dselent.course_load_scheduler.client.model.Courses;
import org.dselent.course_load_scheduler.client.model.Frequency;
import org.dselent.course_load_scheduler.client.model.User;
import org.dselent.course_load_scheduler.client.presenter.EditCoursePresenter;
import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.view.EditCourseView;

import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.StackPanel;
import com.google.inject.Inject;

public class EditCoursePresenterImpl extends BasePresenterImpl implements EditCoursePresenter{
	//implementations of the helpful functions from the interface
	
	private IndexPresenter parentPresenter;
	private EditCourseView view;
	private User user = new User();

	private CourseInfo course;
	private List<CourseSections> sections = new ArrayList<CourseSections>();
	
	
	@Inject
	public EditCoursePresenterImpl(IndexPresenter parentPresenter, EditCourseView view)
	{
		this.view = view;
		this.parentPresenter = parentPresenter;
		view.setPresenter(this);
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
		
		registration = eventBus.addHandler(LoadEditCourseEvent.TYPE, this);
		eventBusRegistration.put(LoadEditCourseEvent.TYPE, registration);
		
		eventBusRegistration.put(ReceiveGetTermsEvent.TYPE, eventBus.addHandler(ReceiveGetTermsEvent.TYPE, this));
		eventBusRegistration.put(ReceiveGetSectionsEvent.TYPE, eventBus.addHandler(ReceiveGetSectionsEvent.TYPE, this));
	}
	
	@Override
	public void onLoadEditCoursePage(LoadEditCourseEvent evt) {
		course = evt.getAction().getCourseInfo();
		
		//fill frequency tables, sections, and the fields with the information from the course
		if(course != null) {
			retrieveFrequencies();
			
			//int index = fillFrequencies(course.getFrequencyId());
			fillSections();
			view.getCourseNameField().setText(course.getCoursesTitle());
			view.getCourseNumberField().setText(course.getCoursesNumber());
			//view.getFrequencyDropdown().setSelectedIndex(index);
			
			this.go(parentPresenter.getView().getViewRootPanel());
		}
		else {
			Window.alert("A course must be selected to edit it.");
		}	
	}
	
	//The response containing the frequencies. Also sets the dropdown's index to the one currently selected by the course
	@Override
	public void onReceiveGetFrequencies(ReceiveGetFrequenciesEvent evt) {
		int index = fillFrequencies(evt.getAction().getFrequencies(), course.getFrequencyId());
		view.getFrequencyDropdown().setSelectedIndex(index);
	}
	
	@Override
	public void onReceiveGetSections(ReceiveGetSectionsEvent evt) {
		sections = evt.getAction().getSections();
		fillSections();
	}
	
	
	@Override
	public void go(HasWidgets container) {
		container.clear();
		container.add(view.getWidgetContainer());
	}

	//returns the view for the presenter
	@Override
	public EditCourseView getView() {
		return view;
	}
	
	//parent info
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
	
	//gets values from DB 
	@Override
	public void retrieveFrequencies() {
		//Sends event to DB to fetch frequencies
		eventBus.fireEvent(new SendGetFrequenciesEvent(new SendGetFrequenciesAction()));
	}
	
	//gets the frequencies from the database and fills the dropdown with them. 
	@Override
	public int fillFrequencies(List<Frequency> freqs, int startingFrequencyValue) {
		int startingFrequencyIndex = -1;

		ListBox box = view.getFrequencyDropdown();
		box.clear();
		
		Iterator<Frequency> iterator = freqs.iterator();
		
		int index = 0;
		while(iterator.hasNext()) {
			Frequency f = iterator.next();

			//add to frequency dropdown
			box.addItem(f.getFrequency(), Integer.toString(f.getId()));
			if(f.getId() == startingFrequencyValue) {
				startingFrequencyIndex = index;
			}
			index++;
		}
		
		return startingFrequencyIndex;
	}
	
	
	//gets the sections for this course and fills the list with them
	@Override
	public void retrieveSections() {
		//Sends event to DB to fetch sections
		eventBus.fireEvent(new SendGetSectionsEvent(new SendGetSectionsAction(course.getCoursesId())));
	}
	
	
	//gets the sections for this course and fills the list with them
	@Override
	public void fillSections() {
		retrieveSections();

		StackPanel panel = view.getSectionList();
		panel.clear();
		
		Iterator<CourseSections> iterator = sections.iterator();
		while(iterator.hasNext()) {
			CourseSections s = iterator.next();

			//add to sections list
			Label label = new Label(s.getSectionType());
			panel.add(label, s.getSectionsName());

		}
	}
	
	
	@Override
	public boolean submitCourseEdit() {
		int fIndex = view.getFrequencyDropdown().getSelectedIndex();
		
		if(fIndex >= 0  && (view.getCourseNameField().getText().length() > 0) && (view.getCourseNumberField().getText().length() > 0)) {
			//since index is valid and fields are not empty, fill object
			Courses editCourse = new Courses();
			editCourse.setFrequencyID(Integer.parseInt(view.getFrequencyDropdown().getValue(fIndex)));
			editCourse.setTitle(view.getCourseNameField().getText());
			editCourse.setNumber(view.getCourseNumberField().getText());
			editCourse.setId(course.getCoursesId());
			
			//this event should go to the DB
			eventBus.fireEvent(new SendEditCourseEvent(new SendEditCourseAction(editCourse)));

			return true;//returns if sending request was successful
		}
		else {//Frequency was not selected
			Window.alert("A Freqeuncy must be selected to edit a course, and no text fields can be empty.");
			return false;
		}
		
	}
	
	
	@Override
	public void returnToViewCourses() {
		LoadViewCoursesEvent evt = new LoadViewCoursesEvent(new LoadViewCoursesAction(user));
		eventBus.fireEvent(evt);
	}
	
	//sends request to remove section from the DB.
	@Override
	public void removeSection() {
		int index = view.getSectionList().getSelectedIndex();//what is to be removed? get the index.
		
		if(index >= 0) {
			Iterator<CourseSections> si = sections.listIterator(index);
			CourseSections s = si.next();
			
			eventBus.fireEvent(new SendRemoveSectionEvent(new SendRemoveSectionAction(s.getSectionId())));

			boolean success = true;//this will be the return value from the request
			
			if(success) {
				view.getSectionList().remove(index);
			}
		}
	}
	
	@Override
	public void loadEditSectionPage() {
		int index = view.getSectionList().getSelectedIndex();
		if(index >= 0) {
			//create and send event:
			LoadEditSectionAction action = new LoadEditSectionAction();
			action.setCourseInfo(course);
			
			Iterator<CourseSections> si = sections.listIterator(index);
			
			CourseSections section = si.next();
			
			action.setSectionInfo(section);
			
			eventBus.fireEvent(new LoadEditSectionEvent(action));
		}
	}
	
	@Override
	public void loadAddSectionPage() {
		LoadAddSectionAction action = new LoadAddSectionAction();
		action.setCourseInfo(course);
		
		LoadAddSectionEvent evt = new LoadAddSectionEvent(action);
		eventBus.fireEvent(evt);
	}

}
