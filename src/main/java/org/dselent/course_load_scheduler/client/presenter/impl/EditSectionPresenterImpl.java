package org.dselent.course_load_scheduler.client.presenter.impl;

import java.sql.Time;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.dselent.course_load_scheduler.client.action.LoadEditCourseAction;
import org.dselent.course_load_scheduler.client.event.LoadEditCourseEvent;
import org.dselent.course_load_scheduler.client.event.LoadEditSectionEvent;
import org.dselent.course_load_scheduler.client.model.CourseInfo;
import org.dselent.course_load_scheduler.client.model.CourseSections;
import org.dselent.course_load_scheduler.client.presenter.EditSectionPresenter;
import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.view.EditSectionView;

import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.ListBox;
import com.google.inject.Inject;

public class EditSectionPresenterImpl extends BasePresenterImpl implements EditSectionPresenter {
	private IndexPresenter parentPresenter;
	private EditSectionView view;

	@Inject
	public EditSectionPresenterImpl(IndexPresenter parentPresenter, EditSectionView view)
	{
		this.view = view;
		this.parentPresenter = parentPresenter;
		view.setPresenter(this);

		fillSectionTerms();
		fillSectionTypes();
		fillSectionStart();
		fillSectionEnd();
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
		registration = eventBus.addHandler(LoadEditSectionEvent.TYPE, this);
		eventBusRegistration.put(LoadEditSectionEvent.TYPE, registration);
	}

	@Override
	public void go(HasWidgets container)
	{
		container.clear();
		container.add(view.getWidgetContainer());
	}

	@Override
	public EditSectionView getView() {
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

	//gets term info about sections
	@Override
	public List<CourseSections> retrieveTerm(){
		List<CourseSections> sections = new ArrayList<CourseSections>();

		CourseSections section1 = new CourseSections();
		section1.setTermsName("A Term");

		CourseSections section2 = new CourseSections();
		section2.setTermsName("B Term");

		CourseSections section3 = new CourseSections();
		section3.setTermsName("C Term");

		CourseSections section4 = new CourseSections();
		section4.setTermsName("D Term");

		CourseSections section5 = new CourseSections();
		section5.setTermsName("E Term");

		CourseSections section6 = new CourseSections();
		section6.setTermsName("Fall");

		CourseSections section7 = new CourseSections();
		section7.setTermsName("Spring");

		sections.add(section1);
		sections.add(section2);
		sections.add(section3);
		sections.add(section4);
		sections.add(section5);
		sections.add(section6);
		sections.add(section7);

		return sections;	

	}

	//gets section type info about sections
	@Override
	public List<CourseSections> retrieveType(){
		List<CourseSections> sections = new ArrayList<CourseSections>();

		CourseSections section1 = new CourseSections();
		section1.setSectionType("Lab");

		CourseSections section2 = new CourseSections();
		section2.setSectionType("Lecture");

		CourseSections section3 = new CourseSections();
		section3.setSectionType("Conference");

		sections.add(section1);
		sections.add(section2);
		sections.add(section3);

		return sections;	

	}

	//gets start/end time info about sections
	@SuppressWarnings("deprecation")
	@Override
	public List<CourseSections> retrieveTime(){
		List<CourseSections> sections = new ArrayList<CourseSections>();

		CourseSections section1 = new CourseSections();
		section1.setStartTime(new Time(8,0,0)); //deprecated Time type (hour, minute, second) cuz Gregorian calendar is too complicated
		section1.setEndTime(new Time(8,50,0));

		CourseSections section2 = new CourseSections();
		section2.setStartTime(new Time(9,0,0));
		section2.setEndTime(new Time(9,50,0));

		CourseSections section3 = new CourseSections();
		section3.setStartTime(new Time(10,0,0));
		section3.setEndTime(new Time(10,50,0));

		CourseSections section4 = new CourseSections();
		section4.setStartTime(new Time(11,0,0));
		section4.setEndTime(new Time(11,50,0));

		CourseSections section5 = new CourseSections();
		section5.setStartTime(new Time(12,0,0));
		section5.setEndTime(new Time(12,50,0));

		CourseSections section6 = new CourseSections();
		section6.setStartTime(new Time(13,0,0));
		section6.setEndTime(new Time(13,50,0));

		CourseSections section7 = new CourseSections();
		section7.setStartTime(new Time(14,0,0));
		section7.setEndTime(new Time(14,50,0));

		CourseSections section8 = new CourseSections();
		section8.setStartTime(new Time(15,0,0));
		section8.setEndTime(new Time(15,50,0));

		CourseSections section9 = new CourseSections();
		section9.setStartTime(new Time(16,0,0));
		section9.setEndTime(new Time(16,50,0));

		sections.add(section1);
		sections.add(section2);
		sections.add(section3);
		sections.add(section4);
		sections.add(section5);
		sections.add(section6);
		sections.add(section7);
		sections.add(section8);
		sections.add(section9);

		return sections;	

	}

	@Override
	public void fillSectionTerms() {
		ListBox term = view.getTermComboBox();

		List<CourseSections> sectionTerms = retrieveTerm();
		Iterator<CourseSections> iterator = sectionTerms.iterator();

		while(iterator.hasNext()) {
			CourseSections CourseSections = iterator.next();
			term.addItem(CourseSections.getTermsName());
		}

		view.setTermComboBox(term);
	}

	@Override
	public void fillSectionTypes() {
		ListBox type = view.getSectionTypeComboBox();

		List<CourseSections> sectionTypes = retrieveType();
		Iterator<CourseSections> iterator = sectionTypes.iterator();

		while(iterator.hasNext()) {
			CourseSections CourseSections = iterator.next();
			type.addItem(CourseSections.getSectionType());			
		}

		view.setSectionTypeComboBox(type);
	}

	@Override
	public void fillSectionStart() {
		ListBox start = view.getSectionStartTimeComboBox();


		List<CourseSections> sectionStart = retrieveTime();
		Iterator<CourseSections> iterator = sectionStart.iterator();

		while(iterator.hasNext()) {
			CourseSections CourseSections = iterator.next();
			start.addItem(CourseSections.getStartTime().toString());			
		}

		view.setSectionStartTimeComboBox(start);
	}

	@Override
	public void fillSectionEnd() {
		ListBox end = view.getSectionEndTimeComboBox();


		List<CourseSections> sectionEnd = retrieveTime();
		Iterator<CourseSections> iterator = sectionEnd.iterator();

		while(iterator.hasNext()) {
			CourseSections CourseSections = iterator.next();
			end.addItem(CourseSections.getEndTime().toString());			
		}

		view.setSectionEndTimeComboBox(end);
	}

	//determine which days are selected and stick them together as a string
	@Override
	public String determineDays() {
		CheckBox monday = view.getMondayCheckBox();
		CheckBox tuesday = view.getTuesdayCheckBox();
		CheckBox wednesday = view.getWednesdayCheckBox();
		CheckBox thursday = view.getThursdayCheckBox();
		CheckBox friday = view.getFridayCheckBox();		

		StringBuilder days = new StringBuilder();

		if(monday.getValue()) {
			days.append(monday.getText());
		}
		if(tuesday.getValue()) {
			days.append(tuesday.getText());
		}
		if(wednesday.getValue()) {
			days.append(wednesday.getText());
		}
		if(thursday.getValue()) {
			days.append(thursday.getText());
		}		
		if(friday.getValue()) {
			days.append(friday.getText());
		}

		return days.toString();		
	}

	//variable to hold info from course
	private CourseSections fromCourse = new CourseSections();
	private CourseInfo course = new CourseInfo();
	@Override
	public void onLoadEditSection(LoadEditSectionEvent evt) {
		//Gather info from course
		fromCourse.setCoursesNumber(evt.getAction().getCourseInfo().getCoursesNumber());
		fromCourse.setCoursesTitle(evt.getAction().getCourseInfo().getCoursesTitle());
		
		//Info to return to edit course page
		course = evt.getAction().getCourseInfo();
		
		this.go(parentPresenter.getView().getViewRootPanel());
	}

	@Override
	public void editSection() {
		ListBox term = view.getTermComboBox();
		ListBox type = view.getSectionTypeComboBox();
		ListBox start = view.getSectionStartTimeComboBox();
		ListBox end = view.getSectionEndTimeComboBox();

		//create the new section
		CourseSections newSection = new CourseSections();
		newSection.setTermsName(term.getItemText(term.getSelectedIndex()));
		newSection.setSectionType(type.getItemText(type.getSelectedIndex()));
		newSection.setStartTime(Time.valueOf(start.getItemText(start.getSelectedIndex())));
		newSection.setEndTime(Time.valueOf(end.getItemText(end.getSelectedIndex())));
		newSection.setDays(this.determineDays());
		newSection.setCoursesNumber(fromCourse.getCoursesNumber());
		newSection.setCoursesTitle(fromCourse.getCoursesTitle());
		newSection.getSectionId();

		eventBus.fireEvent(new LoadEditCourseEvent(new LoadEditCourseAction(course)));

		Window.alert("when you connect this to the DB, your section will be edited to have Term: " + newSection.getTermsName() + 
				" Section Type: " + newSection.getSectionType() +  
				" Start Time: " + newSection.getStartTime() +
				" End Time: " + newSection.getEndTime() +
				" Days: " + newSection.getDays() +
				" For the course: " + newSection.getCoursesNumber() + newSection.getCoursesTitle());
	}

	//loads courses page (viewing) (TODO: work out parameters, determine between Admin/User??)
	@Override
	public void cancelEditSection() {
		eventBus.fireEvent(new LoadEditCourseEvent(new LoadEditCourseAction(course)));
		
		Window.alert("The section was not edited");
	}

}
